<!--@layout(/lookbook/index.html)-->

<div class="dnd_module_cb512e5bb1ccf49be3df289bf203e4fc">   
    <div module="product_normalpackage">
        <div module="product_listnormal" class="productList typeThumb">
            <!--
            $count = 18
            $moreview = no
                ※ 상품진열갯수를 설정하는 변수입니다. 설정하지 않을 경우, 최대 200개의 상품이 진열 됩니다.
                ※ 진열된 상품이 많으면, 쇼핑몰에 부하가 발생할 수 있습니다.
            $basket_result = /product/add_basket.html
            $basket_option = /product/basket_option.html
        -->
            <div class="line_inner"></div>

            <ul class="prdList">
                <li id="anchorBoxId_{$product_no}">    
                    <div class="inner">                     
                        <div class="thumbnail">
                            <div class="prdImg">                      
                                <a href="/lookbook/view.html{$param}" name="anchorBoxName_{$product_no}"><img src="{$image_medium}" id="{$image_medium_id}" alt="{$seo_alt_tag}"></a>
                            </div> 
                        </div>        
                        <div class="description">
                            <strong class="name"><span class="title {$product_name_title_display|display}">{$product_name_title} :</span> {$product_name}</strong>     
                        </div>
                    </div>
                </li>   
                <li id="anchorBoxId_{$product_no}">    
                    <div class="inner">                     
                        <div class="thumbnail">
                            <div class="prdImg">                      
                                <a href="/lookbook/view.html{$param}" name="anchorBoxName_{$product_no}"><img src="{$image_medium}" id="{$image_medium_id}" alt="{$seo_alt_tag}"></a>
                            </div> 
                        </div>        
                        <div class="description">
                            <strong class="name"><span class="title {$product_name_title_display|display}">{$product_name_title} :</span> {$product_name}</strong>     
                        </div>
                    </div>
                </li>   
            </ul>
        </div>
    </div>
</div>


<div module="product_normalpaging" class="ec-base-paginate typeList">
    <!--
        $relation_post = yes
    -->
    <a href="{$param_prev}" class="btnPrev">prev</a>
    <ol>
        <li><a href="{$param}" class="{$param_class}">{$no}</a></li>
        <li><a href="{$param}" class="{$param_class}">{$no}</a></li>
        <li><a href="{$param}" class="{$param_class}">{$no}</a></li>
        <li><a href="{$param}" class="{$param_class}">{$no}</a></li>
        <li><a href="{$param}" class="{$param_class}">{$no}</a></li>
    </ol>
    <a href="{$param_next}" class="btnNext">next</a>
</div>

