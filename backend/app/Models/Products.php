<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Products extends Model {

    use HasFactory;

    protected $collection = 'Products';

    protected $fillable = [
        'Product_name',
        'Category',
        'Brand',
        'Unit',
        'Stock',
        'Price',
    ];

    public static function validationRules() {
        return [
            'Product_name' => 'required|string|max:255',
            'Category'     => 'required|string|max:255',
            'Brand'        => 'required|string|max:255',
            'Unit'         => 'required|numeric',
            'Stock'        => 'required|numeric|min:0',
            'Price'        => 'required|numeric|min:0',
        ];
    }

}
