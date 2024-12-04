import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_PATH = path.resolve('./src/offers.proto');

// Carregar o arquivo .proto
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const offerProto = grpc.loadPackageDefinition(packageDefinition).OfferService;
const client = new offerProto('localhost:50051', grpc.credentials.createInsecure());

export default function handler(req, res) {
    client.GetOffers({ limit: 6 }, (error, response) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(200).json(response);
        }
    });
}
