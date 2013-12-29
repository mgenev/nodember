#!/bin/bash
object=$1
shift
echo curl $@ -b temp.txt http://127.0.0.1:3001/$object
curl $@ -b temp.txt http://127.0.0.1:3001/$object
