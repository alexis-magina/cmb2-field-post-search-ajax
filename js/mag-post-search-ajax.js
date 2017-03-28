(function($) {
  $(function() {
	
	$('.cmb-post-search-ajax').each(
		function () {
			
			var fid 		= $(this).attr('id');
			var query_args 	= $(this).attr('data-queryargs');
			var object		= $(this).attr('data-object');
			$(this).devbridgeAutocomplete({
				serviceUrl: psa.ajaxurl,
				type: 'POST',
				triggerSelectOnValidInput: false,
				showNoSuggestionNotice: true,
				transformResult: function(r) {
					var suggestions = $.parseJSON(r);
					if($('#'+fid+'_results li').length){
						var selected_vals 	= Array();
						var d 				= 0;
						$('#'+fid+'_results input').each(function(index, element) {
                            selected_vals.push( $(this).val() );
                        });
						$(suggestions).each(function(ri, re){
							if($.inArray((re.data).toString(), selected_vals) > -1){
								suggestions.splice(ri-d, 1);
								d++;
							}
						});
					}
					$(suggestions).each(function(ri, re){
						re.value = $('<textarea />').html(re.value).text();
					});
					return {suggestions: suggestions};
				},
				params:{
					action  	: 'cmb_post_search_ajax_get_results',
					psacheck	: psa.nonce,
					object		: object,
					query_args	: query_args,
				},
				onSearchStart: function(){
					$(this).next('img.cmb-post-search-ajax-spinner').css('display', 'inline-block');
				},
				onSearchComplete: function(){
					$(this).next('img.cmb-post-search-ajax-spinner').hide();
				},
				onSelect: function (suggestion) {
					$(this).devbridgeAutocomplete('clearCache');
					var lid 	 = $(this).attr('id') + '_results';
					var limit 	 = $(this).attr('data-limit');
					var sortable = $(this).attr('data-sortable');
					if( limit > 1 ){
						var handle = (sortable == 1) ? '<span class="hndl"></span>' : '';				
						$('#'+lid).append('<li>'+handle+'<input type="hidden" name="'+lid+'[]" value="'+suggestion.data+'"><a href="'+suggestion.guid+'" target="_blank" class="edit-link">'+suggestion.value+'</a><a class="remover"><span class="dashicons dashicons-no"></span><span class="dashicons dashicons-dismiss"></span></a></li>');
						$(this).val('');
						if( limit === $('#' + lid + ' li').length ){
							$(this).prop( 'disabled', 'disabled' );
						}
						else{
							$(this).focus();
						}
					}
					else{
						$('input[name='+lid+']').val(suggestion.data);
					}
				}
			});			
		
			if($(this).attr('data-sortable') == 1){
				$('#'+fid+'_results').sortable({ 
					handle				 : '.hndl', 
					placeholder			 : 'ui-state-highlight', 
					forcePlaceholderSize : true 
				});	
			}
			
			if($(this).attr('data-limit') == 1){
				$(this).on('blur', function(){
					if($(this).val() === ''){
						var lid = $(this).attr('id') + '_results';
						$('input[name='+lid+']').val('');
					}
				});
			}
		
		}
	);
	
	$('.cmb-post-search-ajax-results').on( 'click', 'a.remover', function(){
		$(this).parent('li').fadeOut( 400, function(){ 
			var iid = $(this).parents('ul').attr('id').replace('_results', '');
			$(this).remove(); 
			$('#' + iid).removeProp( 'disabled' );
			$('#' + iid).devbridgeAutocomplete('clearCache');
		});
	});
	  
  });
})(jQuery);
