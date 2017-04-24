CMB2 custom field "post_search_ajax"
==================

Custom field for [CMB2](https://github.com/WebDevStudios/CMB2) to attach posts to each others.

Same approach than [CMB2 Attached Posts Field](https://github.com/WebDevStudios/cmb2-attached-posts/) with Ajax request, multiple/single option, and different UI.

## Installation

You can install this field type as you would a WordPress plugin:

- Download the plugin
- Place the plugin folder in your /wp-content/plugins/ directory
- Activate the plugin in the Plugin dashboard

Composer Intallation:

```
composer require alexis-magina/cmb2-field-post-search-ajax:dev-master
```

## Usage - Admin

Follow the example in [`example-field-setup.php`](https://github.com/alexis-magina/cmb2-field-post-search-ajax/blob/master/example-field-setup.php) for a demonstration.

Options : 
- limit (int, default = 1 : single selection) : limit the number of posts that can be selected
- sortable (bool, default = false) : Allow selected posts to be sort
- query_args (array) : setup the ajax search query : pass a wp_query args array.

Filter : (since 1.1.2)
Ajax results can be filtered to customize returned text and posts values.
Use filter "mag_cmb_post_search_ajax_result", for example :
```
function example_callback( $arr ) {
	// $arr['data'] : contains post_id
	// $arr['guid'] : contains admin edit post url
	// $arr['value'] : contains post title
	$arr['value'] = 'Custom string '.$arr['value'];
    return $arr;
}
add_filter( 'mag_cmb_post_search_ajax_result', 'example_callback' );
```

## Usage - FrontEnd

You can retrieve the meta data using get_post_meta( get_the_ID(), 'your_field_id', true ); 

If field limit > 1, this will return an array of attached post IDs.
If field limit == 1, this will return only the single attached post ID.

## Screenshot

![example](https://github.com/alexis-magina/cmb2-field-post-search-ajax/blob/master/example.gif)

## Changelog

### 1.0.0
* Initial commit

### 1.1.0-sebask
* Added a function which enables usage of CMB2 Field Post Search Ajax from a location other then the Wordpress Plugins folder.

### 1.1.1-sebask
* Fixed a minor bug which caused the use of an undefined constant.

### 1.1.2
* Fixed issue #2 : no way to delete value for fields with limit = 1
* Added a class exists check (issue #3)
* Added a filter "mag_cmb_post_search_ajax_result" to allow customize ajax results
* Fixed a minor bug of encoding chars in autocomplete results

### 1.1.3
* Add Support for user queries
* Fixed issue #11 : sorting problem
* Fixed conflict with ui-autocomplete

### 1.1.4-sebask
* Fixed issue #14: safe mode for jquery-ui-autocomplete and devbridge/jQuery-Autocomplete compatibility.

### 1.1.5
* Fixed issue #17 : Undefined index if the field is empty
