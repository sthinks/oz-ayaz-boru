<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Factory;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function getProduct()
    {
        $data = Product::all();
        $data->map(function ($item) {
            if ($item->image) {
                $images = json_decode($item->image);
                $item->image = collect($images)
                    ->map(function ($image) {
                        return url(
                            sprintf(
                                'storage/%s',
                                str_replace('\\', '/', $image)
                            )
                        );
                    })
                    ->toArray();
            } else {
                $item->image = null;
            }
            return $item;
        });
        return response()->json($data);
    }
    public function getProductFour()
    {
        $data = Product::take(4)->get();
        $data->map(function ($item) {
            if ($item->image) {
                $images = json_decode($item->image);
                $item->image = collect($images)
                    ->map(function ($image) {
                        return url(
                            sprintf(
                                'storage/%s',
                                str_replace('\\', '/', $image)
                            )
                        );
                    })
                    ->toArray();
            } else {
                $item->image = null;
            }
            return $item;
        });
        return response()->json($data);
    }
    public function getProductId($slug)
    {
        $data = Product::where('slug', $slug)->first();
        $array = json_decode($data->pdf, true);
        $data->pdf = array_map(function ($file) {
            $file['download_link'] =
                url('storage/') .
                '/' .
                str_replace('\\', '/', $file['download_link']);
            return $file;
        }, $array);
        if ($data->image) {
            $images = json_decode($data->image);

            $data->image = collect($images)
                ->map(function ($image) {
                    return url(
                        sprintf('storage/%s', str_replace('\\', '/', $image))
                    );
                })
                ->toArray();
        } else {
            $data->image = null;
        }
        if ($data->image_detail) {
            $data->image_detail = url(
                sprintf(
                    'storage/%s',
                    str_replace('\\', '/', $data->image_detail)
                )
            );
        } else {
            $data->image_detail = null;
        }

        $data->banner = url(
            sprintf('storage/%s', str_replace('\\', '/', $data->banner))
        );
        if ($data->meta_desc) {
            $metaDesc = $data->meta_desc;

            // Virgüllerle ayrılmış stringi diziye çevir
            $metaDescArray = explode(',', $metaDesc);

            // Elde edilen dizi
            $data->meta_desc = $metaDescArray;
        } else {
            $data->meta_desc = null;
        }
        return response()->json($data);
    }
    public function getFactory()
    {
        $data = Factory::all();
        $data->each(function ($item) {
            if ($item->image) {
                $images = json_decode($item->image);
                $item->image = collect($images)
                    ->map(function ($image, $key) {
                        return [
                            $key + 1 => url(
                                sprintf(
                                    'storage/%s',
                                    str_replace('\\', '/', $image)
                                )
                            ),
                        ];
                    })
                    ->reduce(function ($carry, $item) {
                        return array_merge($carry, $item);
                    }, []);
            } else {
                $item->image = null;
            }
            return $item;
        });
        return response()->json($data);
    }
}