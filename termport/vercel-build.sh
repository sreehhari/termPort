#!/bin/bash
apt-get update && apt-get install -y python3 python3-pip
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
npm run build
