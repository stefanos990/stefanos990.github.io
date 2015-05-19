<!DOCTYPE html>

<html>
    <head>
        <title>{Title}</title>
        
        
        
        <meta name='color:Link Post Color' content='#689'/>
        <meta name='color:Accent' content='#495E73'/>
        <meta name='color:Blockquote Pale Dark' content='#566B73'/>
        <meta name='color:Links Pale Bright' content='#7399BF'/>
        
        <meta name='select:Background Image Presets' content='http://static.tumblr.com/ec0qbxm/djZnhu9ad/blur3_small.jpg' title='Light Blue Blur'/>
        <meta name='select:Background Image Presets' content='http://static.tumblr.com/ec0qbxm/vfYnhu982/blur1_small.jpg' title='Brown Blur'/>
        <meta name='select:Background Image Presets' content='http://static.tumblr.com/ec0qbxm/rwVnhnf5i/blur2.jpg' title='Dark Blue Blur'/>
        
        <meta name='image:Background Image Upload' content=''/> 
        <meta name='if:Use Own Background Image' content='0'/>
        <meta name='if:Dark Background' content='0'/>
        <meta name="if:Display Sidebar" content="1"/>
        <meta name='if:Infinite Scroll' content='1'/>
        <meta name='if:Fixed Sidebar' content='1'/>

        <meta name="text:Description Title" content="Description Title"/>
        <meta name="text:Rounded Corners Amount" content="4"/>

        
        <meta encoding='utf-8'>
        <link rel="shortcut icon" href="{Favicon}">
        <link rel="alternate" type="application/rss+xml" href="{RSS}">
        
        <!-- Open Sans -->
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
        
        <!-- Raleway -->
        <link href='http://fonts.googleapis.com/css?family=Roboto:700,400|Raleway:400,700,100,900' rel='stylesheet' type='text/css'>
        
        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
        {block:Description}
            <meta name="description" content="{MetaDescription}" />
        {/block:Description}



        
    </head>
    

    
    <body>
        
        <svg style='position: absolute; right: 9999px;' version="1.1" xmlns="http://www.w3.org/2000/svg">
            <filter id="blur">
                <feGaussianBlur stdDeviation="15" />
            </filter>
        </svg>
        
        
        <div class='background-secondary'></div>
        <div class='background'></div>
    
    
        <div class='header'>
            <h1 id='title'>{Title}</h1>
            <div class='separators'>
                <hr/>
                <hr/>
            </div>

            {block:Description}
                <p id="description">
                    <span class='content'>{text:Catchphrase}</span>
                </p>
            {/block:Description}  
        </div>
        
        
        
        <div class='content'>
        
            <!-- POSTS -->
            <div class='posts-container'>
            
                {block:IfNotInfiniteScroll}
                    {block:IfNotDisplaySidebar}
                        <div class='navigation'>
                            {block:PreviousPage}
                                <a href='{PreviousPage}'>
                                    <span class='back-arrow glyphicon glyphicon-chevron-left'></span>
                                </a>
                            {/block:PreviousPage}
                            <a>
                                <span class='back-arrow disabled glyphicon glyphicon-chevron-left'></span>
                            </a>
                            
                            <div class='page-number'>{CurrentPage}</div>
                            {block:NextPage}
                                <a href='{NextPage}'>
                                    <span class='next-arrow glyphicon glyphicon-chevron-right'></span>
                                </a>
                            {/block:NextPage}
                            
                            <a>
                                <span class='next-arrow disabled glyphicon glyphicon-chevron-right'></span>
                            </a>
                        </div>
                    {/block:IfNotDisplaySidebar}
                
                    <style>
                        .navigation {
                            height: 50px;
                            background: rgba(20, 20, 20, 0.4);
                            margin: 0px 15% 50px 15%;
                            border-radius: 4px;
                            text-align: center;
                            line-height: 50px;
                            font-size: 20px;
                            color: #DDD;
                        }
                            .navigation a {
                                display: inline-block;
                                text-align: center;
                                color: #EEE;
                            }
                            .navigation a:hover {
                                color: white;
                            }
                            .back-arrow {
                                float: left;
                            }
                            .next-arrow {
                                float: right;
                            }
                            .back-arrow.disabled, .next-arrow.disabled {
                                color: #999;
                            }
                            .back-arrow.disabled {
                                {block:PreviousPage}
                                    display: none;
                                {/block:PreviousPage}
                            }
                            .next-arrow.disabled {
                                {block:NextPage}
                                    display: none;
                                {/block:NextPage}
                            }
                            .page-number {
                                text-align: center;
                                width: 50%;
                                display: inline-block;
                            }
                    </style>
                {/block:IfNotInfiniteScroll}
            
                <div class="autopagerize_page_element">
                    {block:Posts}
                        <div class='post'>  
                            
                         <!-- _____    _    _    ____    _______    ____     _____ 
                             |  __ \  | |  | |  / __ \  |__   __|  / __ \   / ____|
                             | |__) | | |__| | | |  | |    | |    | |  | | | (___  
                             |  ___/  |  __  | | |  | |    | |    | |  | |  \___ \ 
                             | |      | |  | | | |__| |    | |    | |__| |  ____) |
                             |_|      |_|  |_|  \____/     |_|     \____/  |_____/ -->
                        
                            {block:Photo}
                                {LinkOpenTag}
                                    <div class='photo-post'>
                                        <img class='photo' src="{PhotoURL-500}" alt="{PhotoAlt}"/>
                                    </div>
                                {LinkCloseTag}
                            {/block:Photo}
                            {block:Panorama}
                                {LinkOpenTag}
                                    <div class='photo-post'>
                                        <img class='photo' src="{PhotoURL-500}" alt="{PhotoAlt}"/>
                                    </div>
                                {LinkCloseTag}
                            {/block:Panorama}
                            {block:Photoset}
                                <div class='photoset-post'>
                                {LinkOpenTag}
                                {block:Photos}
                                    <img class='photoset-photo photo' src='{PhotoURL-500}'/>
                                {/block:Photos}
                                {LinkCloseTag} 
                                </div>
                            {/block:Photoset}
                            
                            <style>
                                /* PHOTO/PHOTOSET POST */
                                .photo-post, .photoset-post {
                                    font-family: 'Open Sans', Helvetica, Arial, Sans-serif;
                                    font-weight: thin;
                                }
                                    img.photo {
                                        width: 100%;
                                    }   
                            </style>
                            
        
                            <!--
                              _______   ______  __   __  _______ 
                             |__   __| |  ____| \ \ / / |__   __|
                                | |    | |__     \ V /     | |   
                                | |    |  __|     > <      | |   
                                | |    | |____   / . \     | |   
                                |_|    |______| /_/ \_\    |_|  -->
                            
                            
                            {block:Text}
                                <div class='text-based text-post'>
                                    {block:Title}
                                        <div class='post-title'>
                                            {Title}
                                        </div>
                                    {/block:Title}
                                    <div class='post-body'>
                                        {Body}
                                    </div>
                                </div>
                            {/block:Text}
                            
                            <style>
                                .text-post {
                                    padding: 0px !important;
                                }
                                    .text-post .post-title {
                                        margin-bottom: 14px;
                                        color: #DDD;
                                    }
                                    .text-post img {
                                        max-width: 100%;
                                        max-height: 100%;
                                    }
                                    .text-post a.tumblr_blog {
                                        font-weight: normal;
                                        font-family: 'Open Sans', 'Raleway', Helvetica, Arial, sans-serif;
                                    }
                            </style>
                            
        
                            <!--
                               ____    _    _    ____    _______   ______ 
                              / __ \  | |  | |  / __ \  |__   __| |  ____|
                             | |  | | | |  | | | |  | |    | |    | |__   
                             | |  | | | |  | | | |  | |    | |    |  __|  
                             | |__| | | |__| | | |__| |    | |    | |____ 
                              \___\_\  \____/   \____/     |_|    |______| -->
                            
                            {block:Quote}
                                <div class='text-based quote-post'>
                                    <blockquote class='post-body'>
                                        {Quote}
                                    </blockquote>
                                    {block:Source}
                                        <div class='post-source'>
                                            — {Source}
                                        </div>
                                    {/block:Source}
                                </div>
                            {/block:Quote}
        
                            <style>
                                .quote-post {
                                }
                                    .quote-post .post-body {
                                        font-style: italic;
                                        font-size: 16px;
                                        color: #DDD;
                                        padding: 12px;
                                    }
                                    .quote-post .post-source {
                                        width: 100%;
                                        text-align: right;
                                    }
                            </style>
                            
        
                            <!--
                               _____   _    _              _______ 
                              / ____| | |  | |     /\     |__   __|
                             | |      | |__| |    /  \       | |   
                             | |      |  __  |   / /\ \      | |   
                             | |____  | |  | |  / ____ \     | |   
                              \_____| |_|  |_| /_/    \_\    |_|   -->
                            
                            {block:Chat}
                                <div class='text-based chat-post'>
                                    {block:Title}
                                        <div class='post-title'>
                                            {Title}
                                        </div>
                                    {/block:Title}                            
                                    {block:Lines}
                                        {block:Label}
                                            <b class='post-label'>{Label}</b>
                                        {/block:Label}
                                        {Line}<br/>
                                    {/block:Lines}
                                </div>
                            {/block:Chat}
                            
                            <style>
                                .chat-post {
                                }
                                    .chat-post .post-label {
                                        color: #DDD;
                                        width: 150px;
                                    }
                            </style>
                            
                            
                            <!--
                                         _   _    _____  __          __  ______   _____  
                                 /\     | \ | |  / ____| \ \        / / |  ____| |  __ \ 
                                /  \    |  \| | | (___    \ \  /\  / /  | |__    | |__) |
                               / /\ \   | . ` |  \___ \    \ \/  \/ /   |  __|   |  _  / 
                              / ____ \  | |\  |  ____) |    \  /\  /    | |____  | | \ \ 
                             /_/    \_\ |_| \_| |_____/      \/  \/     |______| |_|  \_\ -->
                            
                            {block:Answer}
                                <div class='text-based answer-post'>
                                    <div class='ask'>
                                        <span class='asker-portrait portrait'>
                                            <img src='{AskerPortraitURL-48}'></img>
                                        </span>
                                        <div class='post-content'>
                                            <span class='asker'>{Asker}: </span>
                                            <span class='question'>{Question}</span>
                                        </div>
                                    </div>
                                    
                                    <div class='answer'>
                                        <div class='answerer-portrait portrait'>
                                            {block:RebloggedFrom}
                                                <img src='{AnswererPortraitURL-48}'></img>
                                            {/block:RebloggedFrom}
                                            {block:NotReblog}
                                                <img src='{PortraitURL-48}'></img>
                                            {/block:NotReblog}
                                        </div>
                                        <div class='post-content'>
                                            {block:NotReblog}
                                                <span class='answerer'>{Answerer}</span>
                                            {/block:NotReblog}
                                            <span class='answer'>{Answer}</span>
                                        </div>
                                    </div>
                                </div>
                            {/block:Answer}
                            
                            <style>
                                .answer-post {
                                }
                                    .answer, .ask {
                                        position: relative;
                                        min-height: 65px;
                                    }
                                        .answer-post .portrait {
                                            position: absolute;
                                            top: 0px;
                                            left: 0px;
                                        }
                                            .answer-post .portrait img {
                                                margin: 0 auto;
                                                border-radius: 24px;
                                            }
                                        .answer-post .post-content {
                                            margin-left: 60px;
                                        }
                            </style>
                            
                            
                            <!--
                              _      _____   _   _   _  __
                             | |    |_   _| | \ | | | |/ /
                             | |      | |   |  \| | | ' / 
                             | |      | |   | . ` | |  <  
                             | |__   _| |_  | |\  | | . \ 
                             |____| |_____| |_| \_| |_|\_\ -->
                            
                            
                            {block:Link}
                                <div class='text-based link-post'>
                                    <div class='post-url'>
                                        <a href='{URL}'>
                                            {Name}
                                        </a>
                                        &nbsp;
                                        <span class='arrow'>&gt;</span>
                                    </div>
                                    <div class='post-description'>
                                        {Description}
                                    </div>
                                </div>
                            {/block:Link}
                            
                            <style>
                                .link-post {
                                    padding: 0px !important;
                                }
                                    .link-post .post-url, .text-post .post-title {
                                        min-height: 50px;
                                        background: rgba(20, 20, 20, 0.3);
                                        padding-left: 25px;
                                        padding-top: 14px;
                                        padding-bottom: 14px;
                                        font-size: 22px;
                                        font-weight: bold;
                                        color: #DDD;
                                        font-family: 'Open Sans', 'Raleway', Helvetica, Arial, sans-serif;
                                    }
                                        .link-post .post-url a, .link-post .post-url .arrow {
                                            color: {color:Link Post Color};
                                        }
                                        .link-post .post-url .arrow {
                                            position: relative;
                                            top: -1px;
                                        }
                                    .link-post .post-description, .text-post .post-body {
                                        padding: 15px;
                                    }
                            </style>
                            
                            
                            <!--
                                         _    _   _____    _____    ____  
                                 /\     | |  | | |  __ \  |_   _|  / __ \ 
                                /  \    | |  | | | |  | |   | |   | |  | |
                               / /\ \   | |  | | | |  | |   | |   | |  | |
                              / ____ \  | |__| | | |__| |  _| |_  | |__| |
                             /_/    \_\  \____/  |_____/  |_____|  \____/  -->
                            
                            {block:Audio}
                                <div class='audio-post'>
                                    {block:AlbumArt}
                                        <div class='post-background-container'>
                                            <img class='post-background' src='{AlbumArtURL}'></img>
                                        </div>
                                    {/block:AlbumArt}
                                    
                                        {block:AudioEmbed}
                                            <div class='audio-embed'>
                                                {AudioEmbed}
                                            </div>
                                        {/block:AudioEmbed}
                                        
                                        
                                    {block:AudioPlayer}
                                        <div class='post-content-player'>
                                            <div class='audio-player {block:AlbumArt}has-pic{/block:AlbumArt}'>
                                                {AudioPlayer}
                                            </div>
                                            {block:AlbumArt}
                                                <img class='album-art' src='{AlbumArtURL}'></img>   
                                            {/block:AlbumArt}
                                        </div>
                                    {/block:AudioPlayer}
                                </div>
                                
                            {/block:Audio}
                            
                            <style>
                                /* AUDIO POST */
                                .audio-post {
                                    position: relative;
                                }
                                    .post-background-container {
                                        height: 150px;
                                        overflow: hidden;
                                    }
                                        .audio-post .post-background {
                                            -webkit-filter: blur(15px);
                                            -moz-filter: blur(15px);
                                            -o-filter: blur(15px);
                                            -ms-filter: blur(15px);
                                            filter: blur(15px);
                                            filter: url('#blur');
                                            opacity: 0.4;
                                            width: 100%;
                                        }
                                    .audio-post .audio-embed iframe {
                                        width: 100%;
                                        height: auto;
                                    }
                                    .audio-post .post-content-player {
                                        width: 100%;
                                        height: 150px;
                                        position: absolute;
                                        top: 0px;
                                    }
                                        .audio-player .tumblr_audio_player /* no pic */ {
                                            width: 100%;
                                        }
                                        .audio-player.has-pic .tumblr_audio_player {
                                            height: 100%;
                                            width: 70%;
                                            overflow: auto;
                                        }
                                        .audio_player {
                                            background: rgba(50, 50, 50, 0.1) !important;
                                        }
                                        .audio-post .album-art {
                                            position: absolute;
                                            top: 0px;
                                            right: 0px;
                                            width: 150px;
                                            height: 150px;
                                        }
                            </style>
                            
        
                            <!-- 
                            __      __  _____   _____    ______    ____  
                             \ \    / / |_   _| |  __ \  |  ____|  / __ \ 
                              \ \  / /    | |   | |  | | | |__    | |  | |
                               \ \/ /     | |   | |  | | |  __|   | |  | |
                                \  /     _| |_  | |__| | | |____  | |__| |
                                 \/     |_____| |_____/  |______|  \____/  -->
                            
                            {block:Video}
                                <div class='video-post'>
                                    {Video-500}
                                </div>
                            {/block:Video}
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            <div class='info'>
                                <!-- Reblog info -->
                                {block:RebloggedFrom}
                                    <div class='reblog-from'>{ReblogParentName}</div>
                                    <img class='reblog-avatar' src='{ReblogParentPortraitURL-96}'><img>
                                {/block:RebloggedFrom}
                                {block:NotReblog}
                                    <div class='reblog-from'>{Name}</div>
                                    <img class='reblog-avatar' src='{PortraitURL-96}'/>
                                {/block:NotReblog}
                                <div class='time-ago text-left'>
                                    {TimeAgo}
                                </div>                                
                                <!-- Caption -->
                                <div class='caption'>
                                    {Caption}
                                </div>
                                

                                    <div class='tags'>
                                        {block:HasTags}
                                            {block:Tags}
                                                <span class='tag'>
                                                    <a href='{TagURL}'>#{Tag}</a>
                                                </span>
                                            {/block:Tags}
                                        {/block:HasTags}
                                            <span class='permalink'>
                                                <a href='{Permalink}'>Permalink</a>
                                            </span>
                                    </div>  
        
                            </div>
                            
                            
                            <!-- Buttons (should be generic) -->
                            <div class='divider'></div>
                            <div class='buttons-container'>
                                <div class='buttons'>
                                    <div class='notes'>
                                       {NoteCountWithLabel} 
                                    </div>
                                    <div class='like-button'>
                                        {LikeButton size="25" color="white"}
                                    </div>
                                    <div class='reblog-button'>
                                        {ReblogButton size="25" color="white"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/block:Posts}
                </div> <!-- /auto_pagerizer -->
                
                
                {block:IfNotInfiniteScroll}
                    <div class='navigation'>
                        {block:PreviousPage}
                            <a href='{PreviousPage}'>
                                <span class='back-arrow glyphicon glyphicon-chevron-left'></span>
                            </a>
                        {/block:PreviousPage}
                        <a>
                            <span class='back-arrow disabled glyphicon glyphicon-chevron-left'></span>
                        </a>
                        
                        <div class='page-number'>{CurrentPage}</div>
                        {block:NextPage}
                            <a href='{NextPage}'>
                                <span class='next-arrow glyphicon glyphicon-chevron-right'></span>
                            </a>
                        {/block:NextPage}
                        
                        <a>
                            <span class='next-arrow disabled glyphicon glyphicon-chevron-right'></span>
                        </a>
                    </div>
                {/block:IfNotInfiniteScroll}
                
            </div> <!-- /posts -->
            
            
            {block:IfDisplaySidebar}
                <div class='side-bar-container'>
                    <div class='container-fixed'>
                        <div class='side-bar'>
                            <div class='side-bar-title'>{text:Description Title}</div>
                            {block:ShowAvatar}
                                <div class='side-bar-avatar'>
                                    <img src='{PortraitURL-128}'></img>
                                </div>
                            {/block:ShowAvatar}
                            <div class='side-bar-content'>{Description}</div>
                            
                            
                            {block:HasPages}
                            <div class='pages'>
                                {block:Pages}
                                <a href='{URL}'>
                                    <div class='page'>
                                        {Label}
                                    </div>
                                </a>
                                {/block:Pages}
                            </div>
                            {/block:HasPages}
                            
                        </div>
                        {block:IfNotInfiniteScroll}
                            <div class='navigation'>
                                {block:PreviousPage}
                                    <a href='{PreviousPage}'>
                                        <span class='back-arrow glyphicon glyphicon-chevron-left'></span>
                                    </a>
                                {/block:PreviousPage}
                                <a>
                                    <span class='back-arrow disabled glyphicon glyphicon-chevron-left'></span>
                                </a>
                                
                                <div class='page-number'>{CurrentPage}</div>
                                {block:NextPage}
                                    <a href='{NextPage}'>
                                        <span class='next-arrow glyphicon glyphicon-chevron-right'></span>
                                    </a>
                                {/block:NextPage}
                                
                                <a>
                                    <span class='next-arrow disabled glyphicon glyphicon-chevron-right'></span>
                                </a>
                            </div>
                        {/block:IfNotInfiniteScroll}
                    </div>
                </div>
                

             {/block:IfDisplaySidebar}
     
            <style>

                .content {
                    position: relative;
                    text-align: center;
                }
                    .posts-container {
                        text-align: initial;
                        display: inline-block;
                    }
                    .side-bar-container {
                        text-align: initial;
                        vertical-align: top;
                        display: inline-block;
                        margin-left: 60px;
                        width: 150px;
                    }
                        .side-bar-container .container-fixed {

                            width: 300px;

                        }
                            .side-bar {
                                height: 100%;
                                padding: 50px;
                                margin-bottom: 15px;
                            }

                                .side-bar-title {
                                    text-align: center;
                                    font-size: 20px;
                                    font-weight: bold;
                                    border-bottom: 1px solid #BBB;
                                    padding-bottom: 3px;
                                }
                                .side-bar-avatar {
                                    text-align: center;
                                    padding: 15px;
                                    border-bottom: 1px solid #BBB;
                                }
                                    .side-bar-avatar img {
                                        border-radius: 8px;
                                        display: inline-block;
                                        text-align: center;
                                    }
                                .side-bar-content {
                                    text-align: center;
                                    padding: 15px;
                                    border-bottom: 1px solid #BBB;
                                }              
                                
                                .side-bar .pages {
                                    padding-top: 12px;
                                    text-align: center;
                                }
                                    .side-bar .pages a {
                                        color: #AAA;
                                    }
                                    .side-bar .pages a:hover {
                                        text-decoration: none;
                                    }
                                        .side-bar a .page {
                                            text-transform: uppercase;
                                            margin: 4px 12px 4px 12px;
                                            padding: 4px;
                                            border-radius: 1px;
                                            background: rgba(255, 255, 255, 0.1);
                                            transition: background 0.5s;
                                            transition: color: 0.5s;
                                        }
                                        .side-bar a .page:hover {
                                            background: rgba(255, 255, 255, 0.2);
                                            color: white;
                                        }
            </style>

        </div> 
        

                 
                            
                            

        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script>

            $(document.body).on('mouseenter', '.post', function() {
                console.log("mouseover");
                
                var autoHeight = $(this).find('.info').css('height', 'auto').height() + 20;
                console.log(autoHeight);
    
                $(this).find('.info').css({
                    'display': 'block',
                    'height': '0px',
                    'padding-top': '0px',
                    'padding-bottom': '0px',
                }).animate({
                    'opacity': '1',
                    'height': autoHeight + 'px',
                    'padding-top': '15px',
                    'padding-bottom': '5px',
                }, 200);
            });
            $(document.body).on('mouseleave', '.post', function() {
                $(this).find('.info').animate({
                    'opacity': '0',
                    'height': '0px',
                    'padding-top': '0px',
                    'padding-bottom': '0px',
                }, {
                    duration: 200, 
                    complete: function() {
                        $(this).css('display', 'none');
                    },
                });
            });


        </script>
                            
                                
                            
                            
                            
        {block:IfInfiniteScroll}                  
            <script type="text/javascript" src="http://codysherman.tumblr.com/tools/infinite-scrolling/code"></script>
        {/block:IfInfiniteScroll}
                            
                            
    </body>
</html>









<style>

    /* --- BACKGROUND --- */
    
    html, body {
        height: 100%;
        background: transparent;
        position: relative;
    }
    
    
    .background-secondary {
        z-index: -2;
    }
    
    .background {
        z-index: -1;
        {block:IfUseOwnBackgroundImage}
            background: url("{image:Background Image Upload}") no-repeat center center fixed;
        {/block:IfUseOwnBackgroundImage}
        
        {block:IfNotUseOwnBackgroundImage}
            background: url("{select:Background Image Presets}") no-repeat center center fixed;
        {/block:IfNotUseOwnBackgroundImage}
        
        position: fixed;
        top: 0px;
        height: 100%;
        width: 100%;
        
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    
    
    
    
    /* --- GLOBAL STYLES --- */
    
    blockquote {
        border-left: 3px solid {color:Blockquote Pale Dark};
    }
    
    
    
    
    /* --- HEADER --- */
    
    .header {
        margin-top: 75px;
        margin-bottom: 90px;
        text-align: center;
        position: relative;
        
        {block:IfDarkBackground}
            text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.5);
            color: #EFEFEF;
        {/block:IfDarkBackground}

    }
        #title {
            font-weight: 100;
            letter-spacing: 16px;
            text-transform: uppercase;
            font-family: 'Raleway', 'Open Sans', Helvetica, Arial, Sans-serif;
            font-size: 65px;
            margin-top: 10px;
        }
        #description {
            margin-bottom: 0px;
            height: 20px;
        }
        
        /* Old */
        #description span.content {
            display: none;
            font-family: 'Raleway';
            font-weight: thin;
            font-size: 25px;
            position: relative;
            top: -24px;
            right: -50px;
        }
        .separators hr {
            display: none;
            position: relative;
            top: -17px;
            margin-top: 0px;
            max-width: 850px;
            margin-bottom: 5px;
            border-color: #555;
            {block:IfDarkBackground}
                border-color: #888;
            {/block:IfDarkBackground}
        }
    
    
    
    
    
    /* --- POSTS -- */
    
    .post, .side-bar {
        border-radius: {text:Rounded Corners Amount}px;
        -webkit-box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.5);
        box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.5);
    }

    .post {
        margin: 0px auto 80px;
        display: block;
        overflow: hidden;
        width: 96%;
        width: 500px;
        /* background: #F2F2F2; */

    }
    
    
        /* GENERIC TEXT POSTS */
        .text-based, .side-bar {
            background: rgba(50, 50, 50, 0.65);
            color: #CCC;
            font-family: 'Open Sans', Helvetica, Arial, Sans-serif;
            font-weight: 300;
            padding: 15px;
        }
        .text-based a, a {
            /* color: #7399BF; */
            color: {color:Links Pale Bright} ;
        } 
        
        
        /* POST INFO */
        .info {
            background: rgba(255, 255, 255, 0.75);
            overflow: visible !important; /* To counteract jQuery animation styling*/
            display: none; opacity: 0; /* For animation initial */
            padding: 15px 30px 5px 30px;
            position: relative;
        }
            .info .caption img {
                max-width: 100%;
            }
            .reblog-from {
                text-transform: capitalize;
                font-family: 'Open Sans', 'Roboto',  Helvetica, Arial, Sans-serif;
                color: #666;
                font-size: 25px;
                position: relative;
                
            }
            
            .reblog-avatar {
                pointer-events: none;
                background: rgba(54, 70, 93, 1);
                border: 3px solid black;
                border-radius: 49px;
                position: absolute;
                right: 20px;
                top: -49px;
                -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.7);
                -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.7);
                box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.7);
            }
            .time-ago {
                padding-bottom: 12px;
                font-size: 12px;
                color: #666;
            }
            .caption {
                font-size: 13px !important;
                color: #6F6F6F;
            }
                .caption a {
                    color: #234;
                }
                blockquote {
                    margin-left: 8px;
                    font-size: 13px;
                }

            .tags {
                border-top: 1px solid #B5B5B5;
                padding-top: 4px;
                padding-left: 8px;
                font-size: 12px;
            }
                .tag a {
                    color: #999;
                }
                .permalink a {
                    color: #666;
                    display: block;
                    float: right;
                }
                
                
        /* POST FOOTER */
        .divider {
            height: 4px;
            /*background: rgba(51, 68, 77, 0.6); */
            background: {color:Accent};
        }
        .buttons-container {
            z-index: 10;
            height: 45px;
            background: rgba(190, 190, 190, 0.5);
            padding: 5px 0 0 28px;
        }
            .buttons {
                height: 35px;
                position: relative;
            }
                .reblog-button, .like-button {
                    position: absolute;
                    right: 22px;
                    top: 5px;
                }
                .like-button {
                    right: 60px;
                }
                .notes {
                    color: white;
                    font-weight: bold;
                    line-height: 35px;
                }
</style>
        
{CustomCSS}

{block:IfFixedSidebar}

<script>
/*
 Sticky-kit v1.1.1 | WTFPL | Leaf Corcoran 2014 | http://leafo.net
*/
(function(){var k,e;k=this.jQuery||window.jQuery;e=k(window);k.fn.stick_in_parent=function(d){var v,y,n,p,h,C,s,G,q,H;null==d&&(d={});s=d.sticky_class;y=d.inner_scrolling;C=d.recalc_every;h=d.parent;p=d.offset_top;n=d.spacer;v=d.bottoming;null==p&&(p=0);null==h&&(h=void 0);null==y&&(y=!0);null==s&&(s="is_stuck");null==v&&(v=!0);G=function(a,d,q,z,D,t,r,E){var u,F,m,A,c,f,B,w,x,g,b;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);f=a.parent();null!=h&&(f=f.closest(h));if(!f.length)throw"failed to find stick parent";
u=m=!1;(g=null!=n?n&&a.closest(n):k("<div />"))&&g.css("position",a.css("position"));B=function(){var c,e,l;if(!E&&(c=parseInt(f.css("border-top-width"),10),e=parseInt(f.css("padding-top"),10),d=parseInt(f.css("padding-bottom"),10),q=f.offset().top+c+e,z=f.height(),m&&(u=m=!1,null==n&&(a.insertAfter(g),g.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(s),l=!0),D=a.offset().top-parseInt(a.css("margin-top"),10)-p,t=a.outerHeight(!0),r=a.css("float"),g&&g.css({width:a.outerWidth(!0),
height:t,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),l))return b()};B();if(t!==z)return A=void 0,c=p,x=C,b=function(){var b,k,l,h;if(!E&&(null!=x&&(--x,0>=x&&(x=C,B())),l=e.scrollTop(),null!=A&&(k=l-A),A=l,m?(v&&(h=l+t+c>z+q,u&&!h&&(u=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),l<D&&(m=!1,c=p,null==n&&("left"!==r&&"right"!==r||a.insertAfter(g),g.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(s).trigger("sticky_kit:unstick")),
y&&(b=e.height(),t+p>b&&!u&&(c-=k,c=Math.max(b-t,c),c=Math.min(p,c),m&&a.css({top:c+"px"})))):l>D&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(s),null==n&&(a.after(g),"left"!==r&&"right"!==r||g.append(a)),a.trigger("sticky_kit:stick")),m&&v&&(null==h&&(h=l+t+c>z+q),!u&&h)))return u=!0,"static"===f.css("position")&&f.css({position:"relative"}),a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},
w=function(){B();return b()},F=function(){E=!0;e.off("touchmove",b);e.off("scroll",b);e.off("resize",w);k(document.body).off("sticky_kit:recalc",w);a.off("sticky_kit:detach",F);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});f.position("position","");if(m)return null==n&&("left"!==r&&"right"!==r||a.insertAfter(g),g.remove()),a.removeClass(s)},e.on("touchmove",b),e.on("scroll",b),e.on("resize",w),k(document.body).on("sticky_kit:recalc",w),a.on("sticky_kit:detach",F),setTimeout(b,
0)}};q=0;for(H=this.length;q<H;q++)d=this[q],G(k(d));return this}}).call(this);

$(".side-bar-container").stick_in_parent({offset_top: 120, bottoming: false});
  
  
</script>



{/block:IfFixedSidebar}

















































