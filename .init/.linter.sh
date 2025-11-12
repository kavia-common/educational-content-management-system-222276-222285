#!/bin/bash
cd /home/kavia/workspace/code-generation/educational-content-management-system-222276-222285/lms_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

