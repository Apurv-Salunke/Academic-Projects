from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from redis_om import get_redis_connection, HashModel
import json
import consumers

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_methods=['*'],
    allow_headers=['*'],
)

redis = get_redis_connection(
    host="redis-18613.c84.us-east-1-2.ec2.cloud.redislabs.com",
    port=18613,
    password="8cgARttj4xZBiK2rMLNCavBmjdzeY9SD",
    decode_responses=True)


class Delivery(HashModel):
    budget: int = 0
    notes: str = ""

    class Meta:
        database = redis


class Event(HashModel):
    delivery_id: str = None
    type: str
    data: str

    class Meta:
        database = redis



@app.post("/deliveries/create")
async def create(request: Request):
    body = await request.json()
    delivery = Delivery(budget=body['data']
                        ['budget'], notes=body['data']['notes']).save()
    event = Event(delivery_id=delivery.pk,
                  type=body['type'], data=json.dumps(body['data'])).save()
    state = consumers.crete_delivery({}, event)
    redis.set(f'delivery:{delivery.pk}', json.dumps(state))
    return event


@app.get('/deliveries/{pk}/status')
async def get_state(pk: str):
    state = redis.get(f"deliveries:{pk}")
    if state is not None:
        return json.loads(state)
    return {}

