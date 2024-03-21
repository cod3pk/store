<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use MongoDB\BSON\ObjectId;
use MongoDB\Client as MongoClient;
use MongoDB\Collection;

class ProductsController extends Controller {

    protected Collection $collection;

    public function __construct( MongoClient $client ) {
        $this->collection = $client->selectCollection( env( 'MONGO_DB_DATABASE' ), 'Products' );
    }

    public function index() {
        try {
            $documents = $this->collection->find()->toArray();

            if ( $documents ) {
                $finalDocumentsArray = array_map( function ( $document ) {
                    $documentArray = json_decode( json_encode( $document ), TRUE );

                    $newIdArray = [ 'id' => $documentArray['_id']['$oid'] ];
                    unset( $documentArray['_id'] );

                    return $newIdArray + $documentArray;
                }, $documents );

                return response()->json( [
                    'success' => TRUE,
                    'data'    => $finalDocumentsArray,
                ] );
            } else {
                return response()->json( [
                    'success' => FALSE,
                    'message' => 'Connection to Database was successful, but no documents were found.',
                ] );
            }
        }
        catch ( \Exception $e ) {
            return response()->json( [
                'success' => FALSE,
                'message' => 'Failed to connect to MongoDB.',
                'error'   => $e->getMessage(),
            ] );
        }
    }

    public function show( $id ) {
        try {
            $objectId = new \MongoDB\BSON\ObjectId( $id );
            $document = $this->collection->findOne( [ '_id' => $objectId ] );

            if ( $document ) {
                $documentArray = json_decode( json_encode( $document ), TRUE );
                $newIdArray    = [ 'id' => $documentArray['_id']['$oid'] ];

                unset( $documentArray['_id'] );

                $finalDocumentArray = $newIdArray + $documentArray;

                return response()->json( [
                    'success' => TRUE,
                    'data'    => $finalDocumentArray,
                ] );
            } else {
                return response()->json( [
                    'success' => FALSE,
                    'message' => 'No Product was found matching the ID.',
                ] );
            }
        }
        catch ( \Exception $e ) {
            return response()->json( [
                'success' => FALSE,
                'message' => 'An unexpected error occurred.',
                'error'   => $e->getMessage(),
            ] );
        }
    }

    public function store( Request $request ) {
        $validated = $request->validate( [
            'Product_name' => 'required|string',
            'Category'     => 'required|string',
            'Brand'        => 'required|string',
            'Unit'         => 'required|integer',
            'Stock'        => 'required|integer',
            'Price'        => 'required|numeric',
        ] );

        $result = $this->collection->insertOne( $validated );

        if ( $result->getInsertedId() ) {
            return response()->json( [
                'success' => TRUE,
                'message' => 'Product created successfully.',
                'id'      => (string) $result->getInsertedId(),
            ] );
        }

        return response()->json( [
            'success' => FALSE,
            'message' => 'Failed to create product.',
        ], 500 );
    }

    public function update( Request $request, $id ) {
        try {
            $objectId = new ObjectId( $id );

            $validated = $request->validate( [
                'Product_name' => 'sometimes|string',
                'Category'     => 'sometimes|string',
                'Brand'        => 'sometimes|string',
                'Unit'         => 'sometimes|integer',
                'Stock'        => 'sometimes|integer',
                'Price'        => 'sometimes|numeric',
            ] );

            // Update product
            $result = $this->collection->updateOne(
                [ '_id' => $objectId ],
                [ '$set' => $validated ]
            );

            if ( $result->getModifiedCount() == 0 ) {
                return response()->json( [
                    'success' => FALSE,
                    'message' => 'No product found with the given ID or no new data to update.',
                ] );
            }

            return response()->json( [
                'success' => TRUE,
                'message' => 'Product updated successfully.',
            ] );
        }
        catch ( \Exception $e ) {
            return response()->json( [
                'success' => FALSE,
                'message' => 'Failed to update product.',
                'error'   => $e->getMessage(),
            ], 500 );
        }
    }

    public function destroy( $id ) {
        try {
            $objectId = new ObjectId( $id );

            $result = $this->collection->deleteOne( [ '_id' => $objectId ] );

            if ( $result->getDeletedCount() == 0 ) {
                return response()->json( [
                    'success' => FALSE,
                    'message' => 'No product found with the given ID.',
                ] );
            }

            return response()->json( [
                'success' => TRUE,
                'message' => 'Product deleted successfully.',
            ] );
        }
        catch ( \Exception $e ) {
            return response()->json( [
                'success' => FALSE,
                'message' => 'Failed to delete product.',
                'error'   => $e->getMessage(),
            ], 500 );
        }
    }

}
