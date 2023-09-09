#!/bin/bash

.\\node_modules\\.bin\\grpc_tools_node_protoc.cmd \
--plugin=protoc-gen-ts=../bin/protoc-gen-ts \
--ts_out=./src/grpc/proto \
-I ./proto \
auth.proto