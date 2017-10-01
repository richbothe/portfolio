




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>Stepper/jquery.fs.stepper.js at master · benplum/Stepper · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="benplum/Stepper" name="twitter:title" /><meta content="Stepper - A jQuery plugin for cross browser number inputs." name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/1130075?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/1130075?v=2&amp;s=400" property="og:image" /><meta content="benplum/Stepper" property="og:title" /><meta content="https://github.com/benplum/Stepper" property="og:url" /><meta content="Stepper - A jQuery plugin for cross browser number inputs." property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="C6F69964:4A7D:1492885:53E13D06" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="PBUcl21dckQXGKAF+B49qk49i58szc9uuSERswrQ7wQGgovm3+5cfjUPPB5JxJAfDu8s/X/QFLUgh/LytELBaw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-81ea6663ad94c27f0a6cbdac007b9462a7c68bc1.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-77312c900ede84f034578825efd95b3fb97c5cf6.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="9b03b7eb992bc8e420e86336044bce8b">

      
  <meta name="description" content="Stepper - A jQuery plugin for cross browser number inputs.">


  <meta content="1130075" name="octolytics-dimension-user_id" /><meta content="benplum" name="octolytics-dimension-user_login" /><meta content="6280614" name="octolytics-dimension-repository_id" /><meta content="benplum/Stepper" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="6280614" name="octolytics-dimension-repository_network_root_id" /><meta content="benplum/Stepper" name="octolytics-dimension-repository_network_root_nwo" />

  <link href="https://github.com/benplum/Stepper/commits/master.atom" rel="alternate" title="Recent Commits to Stepper:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fbenplum%2FStepper%2Fblob%2Fmaster%2Fjquery.fs.stepper.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
          <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
    data-repo="benplum/Stepper"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="benplum/Stepper">

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked">
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global">
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Fbenplum%2FStepper"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/benplum/Stepper/stargazers">
      51
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fbenplum%2FStepper"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/benplum/Stepper/network" class="social-count">
        20
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/benplum" class="url fn" itemprop="url" rel="author"><span itemprop="title">benplum</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/benplum/Stepper" class="js-current-repository js-repo-home-link">Stepper</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/benplum/Stepper/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/benplum/Stepper" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /benplum/Stepper">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/benplum/Stepper/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /benplum/Stepper/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/benplum/Stepper/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /benplum/Stepper/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/benplum/Stepper/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /benplum/Stepper/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/benplum/Stepper/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /benplum/Stepper/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/benplum/Stepper.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/benplum/Stepper.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/benplum/Stepper" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/benplum/Stepper" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save benplum/Stepper to your computer and use it in GitHub Desktop." aria-label="Save benplum/Stepper to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/benplum/Stepper/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download benplum/Stepper as a zip file"
                   title="Download benplum/Stepper as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/benplum/Stepper/blob/e1499a4e086d66214d1493cff6128427cb404701/jquery.fs.stepper.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:8534411647e949958f1043a1c70a1534 -->

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/benplum/Stepper/blob/master/jquery.fs.stepper.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/benplum/Stepper/tree/3.0.7/jquery.fs.stepper.js"
                 data-name="3.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.0.7">3.0.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/benplum/Stepper/tree/3.0.6/jquery.fs.stepper.js"
                 data-name="3.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.0.6">3.0.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/benplum/Stepper/tree/3.0.5/jquery.fs.stepper.js"
                 data-name="3.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.0.5">3.0.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/benplum/Stepper/tree/3.0.4/jquery.fs.stepper.js"
                 data-name="3.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.0.4">3.0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/benplum/Stepper/tree/3.0.3/jquery.fs.stepper.js"
                 data-name="3.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.0.3">3.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/benplum/Stepper/tree/3.0.2/jquery.fs.stepper.js"
                 data-name="3.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.0.2">3.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/benplum/Stepper/tree/3.0.1/jquery.fs.stepper.js"
                 data-name="3.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.0.1">3.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/benplum/Stepper/tree/3.0.0/jquery.fs.stepper.js"
                 data-name="3.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.0.0">3.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/benplum/Stepper/tree/0.1.5/jquery.fs.stepper.js"
                 data-name="0.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.5">0.1.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/benplum/Stepper/tree/0.1.4/jquery.fs.stepper.js"
                 data-name="0.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.4">0.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/benplum/Stepper/tree/0.1.3/jquery.fs.stepper.js"
                 data-name="0.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.3">0.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/benplum/Stepper/tree/0.1.2/jquery.fs.stepper.js"
                 data-name="0.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.2">0.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/benplum/Stepper/tree/0.1.1/jquery.fs.stepper.js"
                 data-name="0.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.1">0.1.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/benplum/Stepper/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="jquery.fs.stepper.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/benplum/Stepper" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Stepper</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.fs.stepper.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Ben Plum" class="main-avatar" data-user="1130075" height="24" src="https://avatars1.githubusercontent.com/u/1130075?v=2&amp;s=48" width="24" />
      <span class="author"><a href="/benplum" rel="author">benplum</a></span>
      <time datetime="2014-05-07T08:55:31-04:00" is="relative-time">May 07, 2014</time>
      <div class="commit-title">
          <a href="/benplum/Stepper/commit/e1499a4e086d66214d1493cff6128427cb404701" class="message" data-pjax="true" title="Adding keyboard control;">Adding keyboard control;</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="benplum" href="/benplum/Stepper/commits/master/jquery.fs.stepper.js?author=benplum"><img alt="Ben Plum" data-user="1130075" height="20" src="https://avatars3.githubusercontent.com/u/1130075?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="ClayLennart" href="/benplum/Stepper/commits/master/jquery.fs.stepper.js?author=ClayLennart"><img alt="ClayLennart" data-user="2277977" height="20" src="https://avatars3.githubusercontent.com/u/2277977?v=2&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Ben Plum" data-user="1130075" height="24" src="https://avatars1.githubusercontent.com/u/1130075?v=2&amp;s=48" width="24" />
            <a href="/benplum">benplum</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="ClayLennart" data-user="2277977" height="24" src="https://avatars1.githubusercontent.com/u/2277977?v=2&amp;s=48" width="24" />
            <a href="/ClayLennart">ClayLennart</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>340 lines (293 sloc)</span>
          <span class="meta-divider"></span>
        <span>7.852 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/benplum/Stepper/raw/master/jquery.fs.stepper.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/benplum/Stepper/blame/master/jquery.fs.stepper.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/benplum/Stepper/commits/master/jquery.fs.stepper.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

            <a class="octicon-button disabled tooltipped tooltipped-w" href="#"
               aria-label="You must be signed in to make or propose changes"><span class="octicon octicon-pencil"></span></a>

          <a class="octicon-button danger disabled tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
      

  <div class="blob-wrapper data type-javascript">
       <table class="file-code file-diff tab-size-8 js-file-line-container">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" class="js-line-number">1</span>
<span id="L2" class="js-line-number">2</span>
<span id="L3" class="js-line-number">3</span>
<span id="L4" class="js-line-number">4</span>
<span id="L5" class="js-line-number">5</span>
<span id="L6" class="js-line-number">6</span>
<span id="L7" class="js-line-number">7</span>
<span id="L8" class="js-line-number">8</span>
<span id="L9" class="js-line-number">9</span>
<span id="L10" class="js-line-number">10</span>
<span id="L11" class="js-line-number">11</span>
<span id="L12" class="js-line-number">12</span>
<span id="L13" class="js-line-number">13</span>
<span id="L14" class="js-line-number">14</span>
<span id="L15" class="js-line-number">15</span>
<span id="L16" class="js-line-number">16</span>
<span id="L17" class="js-line-number">17</span>
<span id="L18" class="js-line-number">18</span>
<span id="L19" class="js-line-number">19</span>
<span id="L20" class="js-line-number">20</span>
<span id="L21" class="js-line-number">21</span>
<span id="L22" class="js-line-number">22</span>
<span id="L23" class="js-line-number">23</span>
<span id="L24" class="js-line-number">24</span>
<span id="L25" class="js-line-number">25</span>
<span id="L26" class="js-line-number">26</span>
<span id="L27" class="js-line-number">27</span>
<span id="L28" class="js-line-number">28</span>
<span id="L29" class="js-line-number">29</span>
<span id="L30" class="js-line-number">30</span>
<span id="L31" class="js-line-number">31</span>
<span id="L32" class="js-line-number">32</span>
<span id="L33" class="js-line-number">33</span>
<span id="L34" class="js-line-number">34</span>
<span id="L35" class="js-line-number">35</span>
<span id="L36" class="js-line-number">36</span>
<span id="L37" class="js-line-number">37</span>
<span id="L38" class="js-line-number">38</span>
<span id="L39" class="js-line-number">39</span>
<span id="L40" class="js-line-number">40</span>
<span id="L41" class="js-line-number">41</span>
<span id="L42" class="js-line-number">42</span>
<span id="L43" class="js-line-number">43</span>
<span id="L44" class="js-line-number">44</span>
<span id="L45" class="js-line-number">45</span>
<span id="L46" class="js-line-number">46</span>
<span id="L47" class="js-line-number">47</span>
<span id="L48" class="js-line-number">48</span>
<span id="L49" class="js-line-number">49</span>
<span id="L50" class="js-line-number">50</span>
<span id="L51" class="js-line-number">51</span>
<span id="L52" class="js-line-number">52</span>
<span id="L53" class="js-line-number">53</span>
<span id="L54" class="js-line-number">54</span>
<span id="L55" class="js-line-number">55</span>
<span id="L56" class="js-line-number">56</span>
<span id="L57" class="js-line-number">57</span>
<span id="L58" class="js-line-number">58</span>
<span id="L59" class="js-line-number">59</span>
<span id="L60" class="js-line-number">60</span>
<span id="L61" class="js-line-number">61</span>
<span id="L62" class="js-line-number">62</span>
<span id="L63" class="js-line-number">63</span>
<span id="L64" class="js-line-number">64</span>
<span id="L65" class="js-line-number">65</span>
<span id="L66" class="js-line-number">66</span>
<span id="L67" class="js-line-number">67</span>
<span id="L68" class="js-line-number">68</span>
<span id="L69" class="js-line-number">69</span>
<span id="L70" class="js-line-number">70</span>
<span id="L71" class="js-line-number">71</span>
<span id="L72" class="js-line-number">72</span>
<span id="L73" class="js-line-number">73</span>
<span id="L74" class="js-line-number">74</span>
<span id="L75" class="js-line-number">75</span>
<span id="L76" class="js-line-number">76</span>
<span id="L77" class="js-line-number">77</span>
<span id="L78" class="js-line-number">78</span>
<span id="L79" class="js-line-number">79</span>
<span id="L80" class="js-line-number">80</span>
<span id="L81" class="js-line-number">81</span>
<span id="L82" class="js-line-number">82</span>
<span id="L83" class="js-line-number">83</span>
<span id="L84" class="js-line-number">84</span>
<span id="L85" class="js-line-number">85</span>
<span id="L86" class="js-line-number">86</span>
<span id="L87" class="js-line-number">87</span>
<span id="L88" class="js-line-number">88</span>
<span id="L89" class="js-line-number">89</span>
<span id="L90" class="js-line-number">90</span>
<span id="L91" class="js-line-number">91</span>
<span id="L92" class="js-line-number">92</span>
<span id="L93" class="js-line-number">93</span>
<span id="L94" class="js-line-number">94</span>
<span id="L95" class="js-line-number">95</span>
<span id="L96" class="js-line-number">96</span>
<span id="L97" class="js-line-number">97</span>
<span id="L98" class="js-line-number">98</span>
<span id="L99" class="js-line-number">99</span>
<span id="L100" class="js-line-number">100</span>
<span id="L101" class="js-line-number">101</span>
<span id="L102" class="js-line-number">102</span>
<span id="L103" class="js-line-number">103</span>
<span id="L104" class="js-line-number">104</span>
<span id="L105" class="js-line-number">105</span>
<span id="L106" class="js-line-number">106</span>
<span id="L107" class="js-line-number">107</span>
<span id="L108" class="js-line-number">108</span>
<span id="L109" class="js-line-number">109</span>
<span id="L110" class="js-line-number">110</span>
<span id="L111" class="js-line-number">111</span>
<span id="L112" class="js-line-number">112</span>
<span id="L113" class="js-line-number">113</span>
<span id="L114" class="js-line-number">114</span>
<span id="L115" class="js-line-number">115</span>
<span id="L116" class="js-line-number">116</span>
<span id="L117" class="js-line-number">117</span>
<span id="L118" class="js-line-number">118</span>
<span id="L119" class="js-line-number">119</span>
<span id="L120" class="js-line-number">120</span>
<span id="L121" class="js-line-number">121</span>
<span id="L122" class="js-line-number">122</span>
<span id="L123" class="js-line-number">123</span>
<span id="L124" class="js-line-number">124</span>
<span id="L125" class="js-line-number">125</span>
<span id="L126" class="js-line-number">126</span>
<span id="L127" class="js-line-number">127</span>
<span id="L128" class="js-line-number">128</span>
<span id="L129" class="js-line-number">129</span>
<span id="L130" class="js-line-number">130</span>
<span id="L131" class="js-line-number">131</span>
<span id="L132" class="js-line-number">132</span>
<span id="L133" class="js-line-number">133</span>
<span id="L134" class="js-line-number">134</span>
<span id="L135" class="js-line-number">135</span>
<span id="L136" class="js-line-number">136</span>
<span id="L137" class="js-line-number">137</span>
<span id="L138" class="js-line-number">138</span>
<span id="L139" class="js-line-number">139</span>
<span id="L140" class="js-line-number">140</span>
<span id="L141" class="js-line-number">141</span>
<span id="L142" class="js-line-number">142</span>
<span id="L143" class="js-line-number">143</span>
<span id="L144" class="js-line-number">144</span>
<span id="L145" class="js-line-number">145</span>
<span id="L146" class="js-line-number">146</span>
<span id="L147" class="js-line-number">147</span>
<span id="L148" class="js-line-number">148</span>
<span id="L149" class="js-line-number">149</span>
<span id="L150" class="js-line-number">150</span>
<span id="L151" class="js-line-number">151</span>
<span id="L152" class="js-line-number">152</span>
<span id="L153" class="js-line-number">153</span>
<span id="L154" class="js-line-number">154</span>
<span id="L155" class="js-line-number">155</span>
<span id="L156" class="js-line-number">156</span>
<span id="L157" class="js-line-number">157</span>
<span id="L158" class="js-line-number">158</span>
<span id="L159" class="js-line-number">159</span>
<span id="L160" class="js-line-number">160</span>
<span id="L161" class="js-line-number">161</span>
<span id="L162" class="js-line-number">162</span>
<span id="L163" class="js-line-number">163</span>
<span id="L164" class="js-line-number">164</span>
<span id="L165" class="js-line-number">165</span>
<span id="L166" class="js-line-number">166</span>
<span id="L167" class="js-line-number">167</span>
<span id="L168" class="js-line-number">168</span>
<span id="L169" class="js-line-number">169</span>
<span id="L170" class="js-line-number">170</span>
<span id="L171" class="js-line-number">171</span>
<span id="L172" class="js-line-number">172</span>
<span id="L173" class="js-line-number">173</span>
<span id="L174" class="js-line-number">174</span>
<span id="L175" class="js-line-number">175</span>
<span id="L176" class="js-line-number">176</span>
<span id="L177" class="js-line-number">177</span>
<span id="L178" class="js-line-number">178</span>
<span id="L179" class="js-line-number">179</span>
<span id="L180" class="js-line-number">180</span>
<span id="L181" class="js-line-number">181</span>
<span id="L182" class="js-line-number">182</span>
<span id="L183" class="js-line-number">183</span>
<span id="L184" class="js-line-number">184</span>
<span id="L185" class="js-line-number">185</span>
<span id="L186" class="js-line-number">186</span>
<span id="L187" class="js-line-number">187</span>
<span id="L188" class="js-line-number">188</span>
<span id="L189" class="js-line-number">189</span>
<span id="L190" class="js-line-number">190</span>
<span id="L191" class="js-line-number">191</span>
<span id="L192" class="js-line-number">192</span>
<span id="L193" class="js-line-number">193</span>
<span id="L194" class="js-line-number">194</span>
<span id="L195" class="js-line-number">195</span>
<span id="L196" class="js-line-number">196</span>
<span id="L197" class="js-line-number">197</span>
<span id="L198" class="js-line-number">198</span>
<span id="L199" class="js-line-number">199</span>
<span id="L200" class="js-line-number">200</span>
<span id="L201" class="js-line-number">201</span>
<span id="L202" class="js-line-number">202</span>
<span id="L203" class="js-line-number">203</span>
<span id="L204" class="js-line-number">204</span>
<span id="L205" class="js-line-number">205</span>
<span id="L206" class="js-line-number">206</span>
<span id="L207" class="js-line-number">207</span>
<span id="L208" class="js-line-number">208</span>
<span id="L209" class="js-line-number">209</span>
<span id="L210" class="js-line-number">210</span>
<span id="L211" class="js-line-number">211</span>
<span id="L212" class="js-line-number">212</span>
<span id="L213" class="js-line-number">213</span>
<span id="L214" class="js-line-number">214</span>
<span id="L215" class="js-line-number">215</span>
<span id="L216" class="js-line-number">216</span>
<span id="L217" class="js-line-number">217</span>
<span id="L218" class="js-line-number">218</span>
<span id="L219" class="js-line-number">219</span>
<span id="L220" class="js-line-number">220</span>
<span id="L221" class="js-line-number">221</span>
<span id="L222" class="js-line-number">222</span>
<span id="L223" class="js-line-number">223</span>
<span id="L224" class="js-line-number">224</span>
<span id="L225" class="js-line-number">225</span>
<span id="L226" class="js-line-number">226</span>
<span id="L227" class="js-line-number">227</span>
<span id="L228" class="js-line-number">228</span>
<span id="L229" class="js-line-number">229</span>
<span id="L230" class="js-line-number">230</span>
<span id="L231" class="js-line-number">231</span>
<span id="L232" class="js-line-number">232</span>
<span id="L233" class="js-line-number">233</span>
<span id="L234" class="js-line-number">234</span>
<span id="L235" class="js-line-number">235</span>
<span id="L236" class="js-line-number">236</span>
<span id="L237" class="js-line-number">237</span>
<span id="L238" class="js-line-number">238</span>
<span id="L239" class="js-line-number">239</span>
<span id="L240" class="js-line-number">240</span>
<span id="L241" class="js-line-number">241</span>
<span id="L242" class="js-line-number">242</span>
<span id="L243" class="js-line-number">243</span>
<span id="L244" class="js-line-number">244</span>
<span id="L245" class="js-line-number">245</span>
<span id="L246" class="js-line-number">246</span>
<span id="L247" class="js-line-number">247</span>
<span id="L248" class="js-line-number">248</span>
<span id="L249" class="js-line-number">249</span>
<span id="L250" class="js-line-number">250</span>
<span id="L251" class="js-line-number">251</span>
<span id="L252" class="js-line-number">252</span>
<span id="L253" class="js-line-number">253</span>
<span id="L254" class="js-line-number">254</span>
<span id="L255" class="js-line-number">255</span>
<span id="L256" class="js-line-number">256</span>
<span id="L257" class="js-line-number">257</span>
<span id="L258" class="js-line-number">258</span>
<span id="L259" class="js-line-number">259</span>
<span id="L260" class="js-line-number">260</span>
<span id="L261" class="js-line-number">261</span>
<span id="L262" class="js-line-number">262</span>
<span id="L263" class="js-line-number">263</span>
<span id="L264" class="js-line-number">264</span>
<span id="L265" class="js-line-number">265</span>
<span id="L266" class="js-line-number">266</span>
<span id="L267" class="js-line-number">267</span>
<span id="L268" class="js-line-number">268</span>
<span id="L269" class="js-line-number">269</span>
<span id="L270" class="js-line-number">270</span>
<span id="L271" class="js-line-number">271</span>
<span id="L272" class="js-line-number">272</span>
<span id="L273" class="js-line-number">273</span>
<span id="L274" class="js-line-number">274</span>
<span id="L275" class="js-line-number">275</span>
<span id="L276" class="js-line-number">276</span>
<span id="L277" class="js-line-number">277</span>
<span id="L278" class="js-line-number">278</span>
<span id="L279" class="js-line-number">279</span>
<span id="L280" class="js-line-number">280</span>
<span id="L281" class="js-line-number">281</span>
<span id="L282" class="js-line-number">282</span>
<span id="L283" class="js-line-number">283</span>
<span id="L284" class="js-line-number">284</span>
<span id="L285" class="js-line-number">285</span>
<span id="L286" class="js-line-number">286</span>
<span id="L287" class="js-line-number">287</span>
<span id="L288" class="js-line-number">288</span>
<span id="L289" class="js-line-number">289</span>
<span id="L290" class="js-line-number">290</span>
<span id="L291" class="js-line-number">291</span>
<span id="L292" class="js-line-number">292</span>
<span id="L293" class="js-line-number">293</span>
<span id="L294" class="js-line-number">294</span>
<span id="L295" class="js-line-number">295</span>
<span id="L296" class="js-line-number">296</span>
<span id="L297" class="js-line-number">297</span>
<span id="L298" class="js-line-number">298</span>
<span id="L299" class="js-line-number">299</span>
<span id="L300" class="js-line-number">300</span>
<span id="L301" class="js-line-number">301</span>
<span id="L302" class="js-line-number">302</span>
<span id="L303" class="js-line-number">303</span>
<span id="L304" class="js-line-number">304</span>
<span id="L305" class="js-line-number">305</span>
<span id="L306" class="js-line-number">306</span>
<span id="L307" class="js-line-number">307</span>
<span id="L308" class="js-line-number">308</span>
<span id="L309" class="js-line-number">309</span>
<span id="L310" class="js-line-number">310</span>
<span id="L311" class="js-line-number">311</span>
<span id="L312" class="js-line-number">312</span>
<span id="L313" class="js-line-number">313</span>
<span id="L314" class="js-line-number">314</span>
<span id="L315" class="js-line-number">315</span>
<span id="L316" class="js-line-number">316</span>
<span id="L317" class="js-line-number">317</span>
<span id="L318" class="js-line-number">318</span>
<span id="L319" class="js-line-number">319</span>
<span id="L320" class="js-line-number">320</span>
<span id="L321" class="js-line-number">321</span>
<span id="L322" class="js-line-number">322</span>
<span id="L323" class="js-line-number">323</span>
<span id="L324" class="js-line-number">324</span>
<span id="L325" class="js-line-number">325</span>
<span id="L326" class="js-line-number">326</span>
<span id="L327" class="js-line-number">327</span>
<span id="L328" class="js-line-number">328</span>
<span id="L329" class="js-line-number">329</span>
<span id="L330" class="js-line-number">330</span>
<span id="L331" class="js-line-number">331</span>
<span id="L332" class="js-line-number">332</span>
<span id="L333" class="js-line-number">333</span>
<span id="L334" class="js-line-number">334</span>
<span id="L335" class="js-line-number">335</span>
<span id="L336" class="js-line-number">336</span>
<span id="L337" class="js-line-number">337</span>
<span id="L338" class="js-line-number">338</span>
<span id="L339" class="js-line-number">339</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line js-file-line' id='LC1'><span class="cm">/* </span></div><div class='line js-file-line' id='LC2'><span class="cm"> * Stepper v3.0.7 - 2014-05-07 </span></div><div class='line js-file-line' id='LC3'><span class="cm"> * A jQuery plugin for cross browser number inputs. Part of the Formstone Library. </span></div><div class='line js-file-line' id='LC4'><span class="cm"> * http://formstone.it/stepper/ </span></div><div class='line js-file-line' id='LC5'><span class="cm"> * </span></div><div class='line js-file-line' id='LC6'><span class="cm"> * Copyright 2014 Ben Plum; MIT Licensed </span></div><div class='line js-file-line' id='LC7'><span class="cm"> */</span> </div><div class='line js-file-line' id='LC8'><br></div><div class='line js-file-line' id='LC9'><span class="p">;(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">,</span> <span class="nb">window</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC10'>	<span class="s2">&quot;use strict&quot;</span><span class="p">;</span></div><div class='line js-file-line' id='LC11'><br></div><div class='line js-file-line' id='LC12'>	<span class="cm">/**</span></div><div class='line js-file-line' id='LC13'><span class="cm">	 * @options</span></div><div class='line js-file-line' id='LC14'><span class="cm">	 * @param customClass [string] &lt;&#39;&#39;&gt; &quot;Class applied to instance&quot;</span></div><div class='line js-file-line' id='LC15'><span class="cm">	 * @param lables.up [string] &lt;&#39;Up&#39;&gt; &quot;Up arrow label&quot;</span></div><div class='line js-file-line' id='LC16'><span class="cm">	 * @param lables.down [string] &lt;&#39;Down&#39;&gt; &quot;Down arrow label&quot;</span></div><div class='line js-file-line' id='LC17'><span class="cm">	 */</span></div><div class='line js-file-line' id='LC18'>	<span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{</span></div><div class='line js-file-line' id='LC19'>		<span class="nx">customClass</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span></div><div class='line js-file-line' id='LC20'>		<span class="nx">labels</span><span class="o">:</span> <span class="p">{</span></div><div class='line js-file-line' id='LC21'>			<span class="nx">up</span><span class="o">:</span> <span class="s2">&quot;Up&quot;</span><span class="p">,</span></div><div class='line js-file-line' id='LC22'>			<span class="nx">down</span><span class="o">:</span> <span class="s2">&quot;Down&quot;</span></div><div class='line js-file-line' id='LC23'>		<span class="p">}</span></div><div class='line js-file-line' id='LC24'>	<span class="p">};</span></div><div class='line js-file-line' id='LC25'><br></div><div class='line js-file-line' id='LC26'>	<span class="kd">var</span> <span class="nx">pub</span> <span class="o">=</span> <span class="p">{</span></div><div class='line js-file-line' id='LC27'><br></div><div class='line js-file-line' id='LC28'>		<span class="cm">/**</span></div><div class='line js-file-line' id='LC29'><span class="cm">		 * @method</span></div><div class='line js-file-line' id='LC30'><span class="cm">		 * @name defaults</span></div><div class='line js-file-line' id='LC31'><span class="cm">		 * @description Sets default plugin options</span></div><div class='line js-file-line' id='LC32'><span class="cm">		 * @param opts [object] &lt;{}&gt; &quot;Options object&quot;</span></div><div class='line js-file-line' id='LC33'><span class="cm">		 * @example $.stepper(&quot;defaults&quot;, opts);</span></div><div class='line js-file-line' id='LC34'><span class="cm">		 */</span></div><div class='line js-file-line' id='LC35'>		<span class="nx">defaults</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC36'>			<span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="nx">opts</span> <span class="o">||</span> <span class="p">{});</span></div><div class='line js-file-line' id='LC37'>			<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line js-file-line' id='LC38'>		<span class="p">},</span></div><div class='line js-file-line' id='LC39'><br></div><div class='line js-file-line' id='LC40'>		<span class="cm">/**</span></div><div class='line js-file-line' id='LC41'><span class="cm">		 * @method</span></div><div class='line js-file-line' id='LC42'><span class="cm">		 * @name destroy</span></div><div class='line js-file-line' id='LC43'><span class="cm">		 * @description Removes instance of plugin</span></div><div class='line js-file-line' id='LC44'><span class="cm">		 * @example $(&quot;.target&quot;).stepper(&quot;destroy&quot;);</span></div><div class='line js-file-line' id='LC45'><span class="cm">		 */</span></div><div class='line js-file-line' id='LC46'>		<span class="nx">destroy</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line js-file-line' id='LC47'>			<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC48'>				<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s2">&quot;stepper&quot;</span><span class="p">);</span></div><div class='line js-file-line' id='LC49'><br></div><div class='line js-file-line' id='LC50'>				<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC51'>					<span class="c1">// Unbind click events</span></div><div class='line js-file-line' id='LC52'>					<span class="nx">data</span><span class="p">.</span><span class="nx">$stepper</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="s2">&quot;.stepper&quot;</span><span class="p">)</span></div><div class='line js-file-line' id='LC53'>								 <span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.stepper-arrow&quot;</span><span class="p">)</span></div><div class='line js-file-line' id='LC54'>								 <span class="p">.</span><span class="nx">remove</span><span class="p">();</span></div><div class='line js-file-line' id='LC55'><br></div><div class='line js-file-line' id='LC56'>					<span class="c1">// Restore DOM</span></div><div class='line js-file-line' id='LC57'>					<span class="nx">data</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">unwrap</span><span class="p">()</span></div><div class='line js-file-line' id='LC58'>							   <span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="s2">&quot;stepper-input&quot;</span><span class="p">);</span></div><div class='line js-file-line' id='LC59'>				<span class="p">}</span></div><div class='line js-file-line' id='LC60'>			<span class="p">});</span></div><div class='line js-file-line' id='LC61'>		<span class="p">},</span></div><div class='line js-file-line' id='LC62'><br></div><div class='line js-file-line' id='LC63'>		<span class="cm">/**</span></div><div class='line js-file-line' id='LC64'><span class="cm">		 * @method</span></div><div class='line js-file-line' id='LC65'><span class="cm">		 * @name disable</span></div><div class='line js-file-line' id='LC66'><span class="cm">		 * @description Disables target instance</span></div><div class='line js-file-line' id='LC67'><span class="cm">		 * @example $(&quot;.target&quot;).stepper(&quot;disable&quot;);</span></div><div class='line js-file-line' id='LC68'><span class="cm">		 */</span></div><div class='line js-file-line' id='LC69'>		<span class="nx">disable</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line js-file-line' id='LC70'>			<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC71'>				<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s2">&quot;stepper&quot;</span><span class="p">);</span></div><div class='line js-file-line' id='LC72'><br></div><div class='line js-file-line' id='LC73'>				<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC74'>					<span class="nx">data</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;disabled&quot;</span><span class="p">,</span> <span class="s2">&quot;disabled&quot;</span><span class="p">);</span></div><div class='line js-file-line' id='LC75'>					<span class="nx">data</span><span class="p">.</span><span class="nx">$stepper</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;disabled&quot;</span><span class="p">);</span></div><div class='line js-file-line' id='LC76'>				<span class="p">}</span></div><div class='line js-file-line' id='LC77'>			<span class="p">});</span></div><div class='line js-file-line' id='LC78'>		<span class="p">},</span></div><div class='line js-file-line' id='LC79'><br></div><div class='line js-file-line' id='LC80'>		<span class="cm">/**</span></div><div class='line js-file-line' id='LC81'><span class="cm">		 * @method</span></div><div class='line js-file-line' id='LC82'><span class="cm">		 * @name enable</span></div><div class='line js-file-line' id='LC83'><span class="cm">		 * @description Enables target instance</span></div><div class='line js-file-line' id='LC84'><span class="cm">		 * @example $(&quot;.target&quot;).stepper(&quot;enable&quot;);</span></div><div class='line js-file-line' id='LC85'><span class="cm">		 */</span></div><div class='line js-file-line' id='LC86'>		<span class="nx">enable</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line js-file-line' id='LC87'>			<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC88'>				<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s2">&quot;stepper&quot;</span><span class="p">);</span></div><div class='line js-file-line' id='LC89'><br></div><div class='line js-file-line' id='LC90'>				<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC91'>					<span class="nx">data</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;disabled&quot;</span><span class="p">,</span> <span class="kc">null</span><span class="p">);</span></div><div class='line js-file-line' id='LC92'>					<span class="nx">data</span><span class="p">.</span><span class="nx">$stepper</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="s2">&quot;disabled&quot;</span><span class="p">);</span></div><div class='line js-file-line' id='LC93'>				<span class="p">}</span></div><div class='line js-file-line' id='LC94'>			<span class="p">});</span></div><div class='line js-file-line' id='LC95'>		<span class="p">}</span></div><div class='line js-file-line' id='LC96'>	<span class="p">};</span></div><div class='line js-file-line' id='LC97'><br></div><div class='line js-file-line' id='LC98'>	<span class="cm">/**</span></div><div class='line js-file-line' id='LC99'><span class="cm">	 * @method private</span></div><div class='line js-file-line' id='LC100'><span class="cm">	 * @name _init</span></div><div class='line js-file-line' id='LC101'><span class="cm">	 * @description Initializes plugin</span></div><div class='line js-file-line' id='LC102'><span class="cm">	 * @param opts [object] &quot;Initialization options&quot;</span></div><div class='line js-file-line' id='LC103'><span class="cm">	 */</span></div><div class='line js-file-line' id='LC104'>	<span class="kd">function</span> <span class="nx">_init</span><span class="p">(</span><span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC105'>		<span class="c1">// Local options</span></div><div class='line js-file-line' id='LC106'>		<span class="nx">opts</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">opts</span> <span class="o">||</span> <span class="p">{});</span></div><div class='line js-file-line' id='LC107'><br></div><div class='line js-file-line' id='LC108'>		<span class="c1">// Apply to each element</span></div><div class='line js-file-line' id='LC109'>		<span class="kd">var</span> <span class="nx">$items</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line js-file-line' id='LC110'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">count</span> <span class="o">=</span> <span class="nx">$items</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">count</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC111'>			<span class="nx">_build</span><span class="p">(</span><span class="nx">$items</span><span class="p">.</span><span class="nx">eq</span><span class="p">(</span><span class="nx">i</span><span class="p">),</span> <span class="nx">opts</span><span class="p">);</span></div><div class='line js-file-line' id='LC112'>		<span class="p">}</span></div><div class='line js-file-line' id='LC113'>		<span class="k">return</span> <span class="nx">$items</span><span class="p">;</span></div><div class='line js-file-line' id='LC114'>	<span class="p">}</span></div><div class='line js-file-line' id='LC115'><br></div><div class='line js-file-line' id='LC116'>	<span class="cm">/**</span></div><div class='line js-file-line' id='LC117'><span class="cm">	 * @method private</span></div><div class='line js-file-line' id='LC118'><span class="cm">	 * @name _build</span></div><div class='line js-file-line' id='LC119'><span class="cm">	 * @description Builds each instance</span></div><div class='line js-file-line' id='LC120'><span class="cm">	 * @param $select [jQuery object] &quot;Target jQuery object&quot;</span></div><div class='line js-file-line' id='LC121'><span class="cm">	 * @param opts [object] &lt;{}&gt; &quot;Options object&quot;</span></div><div class='line js-file-line' id='LC122'><span class="cm">	 */</span></div><div class='line js-file-line' id='LC123'>	<span class="kd">function</span> <span class="nx">_build</span><span class="p">(</span><span class="nx">$input</span><span class="p">,</span> <span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC124'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">$input</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s2">&quot;stepper-input&quot;</span><span class="p">))</span> <span class="p">{</span></div><div class='line js-file-line' id='LC125'>			<span class="c1">// EXTEND OPTIONS</span></div><div class='line js-file-line' id='LC126'>			<span class="nx">opts</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">opts</span><span class="p">,</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s2">&quot;stepper-options&quot;</span><span class="p">));</span></div><div class='line js-file-line' id='LC127'><br></div><div class='line js-file-line' id='LC128'>			<span class="c1">// HTML5 attributes</span></div><div class='line js-file-line' id='LC129'>			<span class="kd">var</span> <span class="nx">min</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">$input</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;min&quot;</span><span class="p">)),</span></div><div class='line js-file-line' id='LC130'>				<span class="nx">max</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">$input</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;max&quot;</span><span class="p">)),</span></div><div class='line js-file-line' id='LC131'>				<span class="nx">step</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">$input</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;step&quot;</span><span class="p">))</span> <span class="o">||</span> <span class="mi">1</span><span class="p">;</span></div><div class='line js-file-line' id='LC132'><br></div><div class='line js-file-line' id='LC133'>			<span class="c1">// Modify DOM</span></div><div class='line js-file-line' id='LC134'>			<span class="nx">$input</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;stepper-input&quot;</span><span class="p">)</span></div><div class='line js-file-line' id='LC135'>				  <span class="p">.</span><span class="nx">wrap</span><span class="p">(</span><span class="s1">&#39;&lt;div class=&quot;stepper &#39;</span> <span class="o">+</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">customClass</span> <span class="o">+</span> <span class="s1">&#39;&quot; /&gt;&#39;</span><span class="p">)</span></div><div class='line js-file-line' id='LC136'>				  <span class="p">.</span><span class="nx">after</span><span class="p">(</span><span class="s1">&#39;&lt;span class=&quot;stepper-arrow up&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">labels</span><span class="p">.</span><span class="nx">up</span> <span class="o">+</span> <span class="s1">&#39;&lt;/span&gt;&lt;span class=&quot;stepper-arrow down&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">labels</span><span class="p">.</span><span class="nx">down</span> <span class="o">+</span> <span class="s1">&#39;&lt;/span&gt;&#39;</span><span class="p">);</span></div><div class='line js-file-line' id='LC137'><br></div><div class='line js-file-line' id='LC138'>			<span class="c1">// Store data</span></div><div class='line js-file-line' id='LC139'>			<span class="kd">var</span> <span class="nx">$stepper</span> <span class="o">=</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">parent</span><span class="p">(</span><span class="s2">&quot;.stepper&quot;</span><span class="p">),</span></div><div class='line js-file-line' id='LC140'>				<span class="nx">data</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line js-file-line' id='LC141'>					<span class="nx">$stepper</span><span class="o">:</span> <span class="nx">$stepper</span><span class="p">,</span></div><div class='line js-file-line' id='LC142'>					<span class="nx">$input</span><span class="o">:</span> <span class="nx">$input</span><span class="p">,</span></div><div class='line js-file-line' id='LC143'>					<span class="nx">$arrow</span><span class="o">:</span> <span class="nx">$stepper</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.stepper-arrow&quot;</span><span class="p">),</span></div><div class='line js-file-line' id='LC144'>					<span class="nx">min</span><span class="o">:</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">min</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">min</span><span class="p">))</span> <span class="o">?</span> <span class="nx">min</span> <span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line js-file-line' id='LC145'>					<span class="nx">max</span><span class="o">:</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">max</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">max</span><span class="p">))</span> <span class="o">?</span> <span class="nx">max</span> <span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line js-file-line' id='LC146'>					<span class="nx">step</span><span class="o">:</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">step</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">step</span><span class="p">))</span> <span class="o">?</span> <span class="nx">step</span> <span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line js-file-line' id='LC147'>					<span class="nx">timer</span><span class="o">:</span> <span class="kc">null</span></div><div class='line js-file-line' id='LC148'>				<span class="p">},</span> <span class="nx">opts</span><span class="p">);</span></div><div class='line js-file-line' id='LC149'><br></div><div class='line js-file-line' id='LC150'>			<span class="nx">data</span><span class="p">.</span><span class="nx">digits</span> <span class="o">=</span> <span class="nx">_digits</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">step</span><span class="p">);</span></div><div class='line js-file-line' id='LC151'><br></div><div class='line js-file-line' id='LC152'>			<span class="c1">// Check disabled</span></div><div class='line js-file-line' id='LC153'>			<span class="k">if</span> <span class="p">(</span><span class="nx">$input</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s2">&quot;:disabled&quot;</span><span class="p">))</span> <span class="p">{</span></div><div class='line js-file-line' id='LC154'>				<span class="nx">$stepper</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;disabled&quot;</span><span class="p">);</span></div><div class='line js-file-line' id='LC155'>			<span class="p">}</span></div><div class='line js-file-line' id='LC156'><br></div><div class='line js-file-line' id='LC157'>			<span class="c1">// Bind keyboard events</span></div><div class='line js-file-line' id='LC158'>			<span class="nx">$stepper</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;keypress&quot;</span><span class="p">,</span> <span class="s2">&quot;.stepper-input&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">_onKeyup</span><span class="p">);</span></div><div class='line js-file-line' id='LC159'><br></div><div class='line js-file-line' id='LC160'>			<span class="c1">// Bind click events</span></div><div class='line js-file-line' id='LC161'>			<span class="nx">$stepper</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;touchstart.stepper mousedown.stepper&quot;</span><span class="p">,</span> <span class="s2">&quot;.stepper-arrow&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">_onMouseDown</span><span class="p">)</span></div><div class='line js-file-line' id='LC162'>					<span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s2">&quot;stepper&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line js-file-line' id='LC163'>		<span class="p">}</span></div><div class='line js-file-line' id='LC164'>	<span class="p">}</span></div><div class='line js-file-line' id='LC165'><br></div><div class='line js-file-line' id='LC166'>	<span class="cm">/**</span></div><div class='line js-file-line' id='LC167'><span class="cm">	 * @method private</span></div><div class='line js-file-line' id='LC168'><span class="cm">	 * @name _onKeyup</span></div><div class='line js-file-line' id='LC169'><span class="cm">	 * @description Handles keypress event on inputs</span></div><div class='line js-file-line' id='LC170'><span class="cm">	 * @param e [object] &quot;Event data&quot;</span></div><div class='line js-file-line' id='LC171'><span class="cm">	 */</span></div><div class='line js-file-line' id='LC172'>	<span class="kd">function</span> <span class="nx">_onKeyup</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC173'>		<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></div><div class='line js-file-line' id='LC174'><br></div><div class='line js-file-line' id='LC175'>		<span class="c1">// If arrow keys</span></div><div class='line js-file-line' id='LC176'>		<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">===</span> <span class="mi">38</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">===</span> <span class="mi">40</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC177'>			<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line js-file-line' id='LC178'><br></div><div class='line js-file-line' id='LC179'>			<span class="nx">_step</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">===</span> <span class="mi">38</span><span class="p">)</span> <span class="o">?</span> <span class="nx">data</span><span class="p">.</span><span class="nx">step</span> <span class="o">:</span> <span class="o">-</span><span class="nx">data</span><span class="p">.</span><span class="nx">step</span><span class="p">);</span></div><div class='line js-file-line' id='LC180'>		<span class="p">}</span></div><div class='line js-file-line' id='LC181'>	<span class="p">}</span></div><div class='line js-file-line' id='LC182'><br></div><div class='line js-file-line' id='LC183'>	<span class="cm">/**</span></div><div class='line js-file-line' id='LC184'><span class="cm">	 * @method private</span></div><div class='line js-file-line' id='LC185'><span class="cm">	 * @name _onMouseDown</span></div><div class='line js-file-line' id='LC186'><span class="cm">	 * @description Handles mousedown event on instance arrows</span></div><div class='line js-file-line' id='LC187'><span class="cm">	 * @param e [object] &quot;Event data&quot;</span></div><div class='line js-file-line' id='LC188'><span class="cm">	 */</span></div><div class='line js-file-line' id='LC189'>	<span class="kd">function</span> <span class="nx">_onMouseDown</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC190'>		<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line js-file-line' id='LC191'>		<span class="nx">e</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line js-file-line' id='LC192'><br></div><div class='line js-file-line' id='LC193'>		<span class="c1">// Make sure we reset the states</span></div><div class='line js-file-line' id='LC194'>		<span class="nx">_onMouseUp</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line js-file-line' id='LC195'><br></div><div class='line js-file-line' id='LC196'>		<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></div><div class='line js-file-line' id='LC197'><br></div><div class='line js-file-line' id='LC198'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">data</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;:disabled&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">data</span><span class="p">.</span><span class="nx">$stepper</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s2">&quot;disabled&quot;</span><span class="p">))</span> <span class="p">{</span></div><div class='line js-file-line' id='LC199'>			<span class="kd">var</span> <span class="nx">change</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">).</span><span class="nx">hasClass</span><span class="p">(</span><span class="s2">&quot;up&quot;</span><span class="p">)</span> <span class="o">?</span> <span class="nx">data</span><span class="p">.</span><span class="nx">step</span> <span class="o">:</span> <span class="o">-</span><span class="nx">data</span><span class="p">.</span><span class="nx">step</span><span class="p">;</span></div><div class='line js-file-line' id='LC200'><br></div><div class='line js-file-line' id='LC201'>			<span class="nx">data</span><span class="p">.</span><span class="nx">timer</span> <span class="o">=</span> <span class="nx">_startTimer</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">timer</span><span class="p">,</span> <span class="mi">125</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line js-file-line' id='LC202'>				<span class="nx">_step</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">change</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line js-file-line' id='LC203'>			<span class="p">});</span></div><div class='line js-file-line' id='LC204'>			<span class="nx">_step</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">change</span><span class="p">);</span></div><div class='line js-file-line' id='LC205'><br></div><div class='line js-file-line' id='LC206'>			<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;touchend.stepper mouseup.stepper&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">_onMouseUp</span><span class="p">);</span></div><div class='line js-file-line' id='LC207'>		<span class="p">}</span></div><div class='line js-file-line' id='LC208'>	<span class="p">}</span></div><div class='line js-file-line' id='LC209'><br></div><div class='line js-file-line' id='LC210'>	<span class="cm">/**</span></div><div class='line js-file-line' id='LC211'><span class="cm">	 * @method private</span></div><div class='line js-file-line' id='LC212'><span class="cm">	 * @name _onMouseUp</span></div><div class='line js-file-line' id='LC213'><span class="cm">	 * @description Handles mouseup event on instance arrows</span></div><div class='line js-file-line' id='LC214'><span class="cm">	 * @param e [object] &quot;Event data&quot;</span></div><div class='line js-file-line' id='LC215'><span class="cm">	 */</span></div><div class='line js-file-line' id='LC216'>	<span class="kd">function</span> <span class="nx">_onMouseUp</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC217'>		<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line js-file-line' id='LC218'>		<span class="nx">e</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line js-file-line' id='LC219'><br></div><div class='line js-file-line' id='LC220'>		<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></div><div class='line js-file-line' id='LC221'><br></div><div class='line js-file-line' id='LC222'>		<span class="nx">_clearTimer</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">timer</span><span class="p">);</span></div><div class='line js-file-line' id='LC223'><br></div><div class='line js-file-line' id='LC224'>		<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">).</span><span class="nx">off</span><span class="p">(</span><span class="s2">&quot;.stepper&quot;</span><span class="p">);</span></div><div class='line js-file-line' id='LC225'>	<span class="p">}</span></div><div class='line js-file-line' id='LC226'><br></div><div class='line js-file-line' id='LC227'>	<span class="cm">/**</span></div><div class='line js-file-line' id='LC228'><span class="cm">	 * @method private</span></div><div class='line js-file-line' id='LC229'><span class="cm">	 * @name _step</span></div><div class='line js-file-line' id='LC230'><span class="cm">	 * @description Steps through values</span></div><div class='line js-file-line' id='LC231'><span class="cm">	 * @param e [object] &quot;Event data&quot;</span></div><div class='line js-file-line' id='LC232'><span class="cm">	 * @param change [string] &quot;Change value&quot;</span></div><div class='line js-file-line' id='LC233'><span class="cm">	 */</span></div><div class='line js-file-line' id='LC234'>	<span class="kd">function</span> <span class="nx">_step</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">change</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC235'>		<span class="kd">var</span> <span class="nx">originalValue</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">val</span><span class="p">()),</span></div><div class='line js-file-line' id='LC236'>			<span class="nx">value</span> <span class="o">=</span> <span class="nx">change</span><span class="p">;</span></div><div class='line js-file-line' id='LC237'><br></div><div class='line js-file-line' id='LC238'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">originalValue</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">||</span> <span class="nb">isNaN</span><span class="p">(</span><span class="nx">originalValue</span><span class="p">))</span> <span class="p">{</span></div><div class='line js-file-line' id='LC239'>			<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">min</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC240'>				<span class="nx">value</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">min</span><span class="p">;</span></div><div class='line js-file-line' id='LC241'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line js-file-line' id='LC242'>				<span class="nx">value</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line js-file-line' id='LC243'>			<span class="p">}</span></div><div class='line js-file-line' id='LC244'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">min</span> <span class="o">!==</span> <span class="kc">false</span> <span class="o">&amp;&amp;</span> <span class="nx">originalValue</span> <span class="o">&lt;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">min</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC245'>			<span class="nx">value</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">min</span><span class="p">;</span></div><div class='line js-file-line' id='LC246'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line js-file-line' id='LC247'>			<span class="nx">value</span> <span class="o">+=</span> <span class="nx">originalValue</span><span class="p">;</span></div><div class='line js-file-line' id='LC248'>		<span class="p">}</span></div><div class='line js-file-line' id='LC249'><br></div><div class='line js-file-line' id='LC250'>		<span class="kd">var</span> <span class="nx">diff</span> <span class="o">=</span> <span class="p">(</span><span class="nx">value</span> <span class="o">-</span> <span class="nx">data</span><span class="p">.</span><span class="nx">min</span><span class="p">)</span> <span class="o">%</span> <span class="nx">data</span><span class="p">.</span><span class="nx">step</span><span class="p">;</span></div><div class='line js-file-line' id='LC251'>		<span class="k">if</span> <span class="p">(</span><span class="nx">diff</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC252'>			<span class="nx">value</span> <span class="o">-=</span> <span class="nx">diff</span><span class="p">;</span></div><div class='line js-file-line' id='LC253'>		<span class="p">}</span></div><div class='line js-file-line' id='LC254'><br></div><div class='line js-file-line' id='LC255'>		<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">min</span> <span class="o">!==</span> <span class="kc">false</span> <span class="o">&amp;&amp;</span> <span class="nx">value</span> <span class="o">&lt;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">min</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC256'>			<span class="nx">value</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">min</span><span class="p">;</span></div><div class='line js-file-line' id='LC257'>		<span class="p">}</span></div><div class='line js-file-line' id='LC258'>		<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">max</span> <span class="o">!==</span> <span class="kc">false</span> <span class="o">&amp;&amp;</span> <span class="nx">value</span> <span class="o">&gt;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">max</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC259'>			<span class="nx">value</span> <span class="o">-=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">step</span><span class="p">;</span></div><div class='line js-file-line' id='LC260'>		<span class="p">}</span></div><div class='line js-file-line' id='LC261'><br></div><div class='line js-file-line' id='LC262'>		<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">!==</span> <span class="nx">originalValue</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC263'>			<span class="nx">value</span> <span class="o">=</span> <span class="nx">_round</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">digits</span><span class="p">);</span></div><div class='line js-file-line' id='LC264'><br></div><div class='line js-file-line' id='LC265'>			<span class="nx">data</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">val</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span></div><div class='line js-file-line' id='LC266'>					   <span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;change&quot;</span><span class="p">);</span></div><div class='line js-file-line' id='LC267'>		<span class="p">}</span></div><div class='line js-file-line' id='LC268'>	<span class="p">}</span></div><div class='line js-file-line' id='LC269'><br></div><div class='line js-file-line' id='LC270'>	<span class="cm">/**</span></div><div class='line js-file-line' id='LC271'><span class="cm">	 * @method private</span></div><div class='line js-file-line' id='LC272'><span class="cm">	 * @name _startTimer</span></div><div class='line js-file-line' id='LC273'><span class="cm">	 * @description Starts an internal timer</span></div><div class='line js-file-line' id='LC274'><span class="cm">	 * @param timer [int] &quot;Timer ID&quot;</span></div><div class='line js-file-line' id='LC275'><span class="cm">	 * @param time [int] &quot;Time until execution&quot;</span></div><div class='line js-file-line' id='LC276'><span class="cm">	 * @param callback [int] &quot;Function to execute&quot;</span></div><div class='line js-file-line' id='LC277'><span class="cm">	 */</span></div><div class='line js-file-line' id='LC278'>	<span class="kd">function</span> <span class="nx">_startTimer</span><span class="p">(</span><span class="nx">timer</span><span class="p">,</span> <span class="nx">time</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC279'>		<span class="nx">_clearTimer</span><span class="p">(</span><span class="nx">timer</span><span class="p">);</span></div><div class='line js-file-line' id='LC280'>		<span class="k">return</span> <span class="nx">setInterval</span><span class="p">(</span><span class="nx">callback</span><span class="p">,</span> <span class="nx">time</span><span class="p">);</span></div><div class='line js-file-line' id='LC281'>	<span class="p">}</span></div><div class='line js-file-line' id='LC282'><br></div><div class='line js-file-line' id='LC283'>	<span class="cm">/**</span></div><div class='line js-file-line' id='LC284'><span class="cm">	 * @method private</span></div><div class='line js-file-line' id='LC285'><span class="cm">	 * @name _clearTimer</span></div><div class='line js-file-line' id='LC286'><span class="cm">	 * @description Clears an internal timer</span></div><div class='line js-file-line' id='LC287'><span class="cm">	 * @param timer [int] &quot;Timer ID&quot;</span></div><div class='line js-file-line' id='LC288'><span class="cm">	 */</span></div><div class='line js-file-line' id='LC289'>	<span class="kd">function</span> <span class="nx">_clearTimer</span><span class="p">(</span><span class="nx">timer</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC290'>		<span class="k">if</span> <span class="p">(</span><span class="nx">timer</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC291'>			<span class="nx">clearInterval</span><span class="p">(</span><span class="nx">timer</span><span class="p">);</span></div><div class='line js-file-line' id='LC292'>			<span class="nx">timer</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line js-file-line' id='LC293'>		<span class="p">}</span></div><div class='line js-file-line' id='LC294'>	<span class="p">}</span></div><div class='line js-file-line' id='LC295'><br></div><div class='line js-file-line' id='LC296'>	<span class="cm">/**</span></div><div class='line js-file-line' id='LC297'><span class="cm">	 * @method private</span></div><div class='line js-file-line' id='LC298'><span class="cm">	 * @name _digits</span></div><div class='line js-file-line' id='LC299'><span class="cm">	 * @description Analyzes and returns significant digit count</span></div><div class='line js-file-line' id='LC300'><span class="cm">	 * @param value [float] &quot;Value to analyze&quot;</span></div><div class='line js-file-line' id='LC301'><span class="cm">	 * @return [int] &quot;Number of significant digits&quot;</span></div><div class='line js-file-line' id='LC302'><span class="cm">	 */</span></div><div class='line js-file-line' id='LC303'>	<span class="kd">function</span> <span class="nx">_digits</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC304'>		<span class="kd">var</span> <span class="nx">test</span> <span class="o">=</span> <span class="nb">String</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line js-file-line' id='LC305'>		<span class="k">if</span> <span class="p">(</span><span class="nx">test</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC306'>			<span class="k">return</span> <span class="nx">test</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="nx">test</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line js-file-line' id='LC307'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line js-file-line' id='LC308'>			<span class="k">return</span> <span class="mi">0</span><span class="p">;</span></div><div class='line js-file-line' id='LC309'>		<span class="p">}</span></div><div class='line js-file-line' id='LC310'>	<span class="p">}</span></div><div class='line js-file-line' id='LC311'><br></div><div class='line js-file-line' id='LC312'>	<span class="cm">/**</span></div><div class='line js-file-line' id='LC313'><span class="cm">	 * @method private</span></div><div class='line js-file-line' id='LC314'><span class="cm">	 * @name _round</span></div><div class='line js-file-line' id='LC315'><span class="cm">	 * @description Rounds a number to a sepcific significant digit count</span></div><div class='line js-file-line' id='LC316'><span class="cm">	 * @param value [float] &quot;Value to round&quot;</span></div><div class='line js-file-line' id='LC317'><span class="cm">	 * @param digits [float] &quot;Digits to round to&quot;</span></div><div class='line js-file-line' id='LC318'><span class="cm">	 * @return [number] &quot;Rounded number&quot;</span></div><div class='line js-file-line' id='LC319'><span class="cm">	 */</span></div><div class='line js-file-line' id='LC320'>	<span class="kd">function</span> <span class="nx">_round</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">digits</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC321'>		<span class="kd">var</span> <span class="nx">exp</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span> <span class="nx">digits</span><span class="p">);</span></div><div class='line js-file-line' id='LC322'>		<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">value</span> <span class="o">*</span> <span class="nx">exp</span><span class="p">)</span> <span class="o">/</span> <span class="nx">exp</span><span class="p">;</span></div><div class='line js-file-line' id='LC323'>	<span class="p">}</span></div><div class='line js-file-line' id='LC324'><br></div><div class='line js-file-line' id='LC325'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">stepper</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC326'>		<span class="k">if</span> <span class="p">(</span><span class="nx">pub</span><span class="p">[</span><span class="nx">method</span><span class="p">])</span> <span class="p">{</span></div><div class='line js-file-line' id='LC327'>			<span class="k">return</span> <span class="nx">pub</span><span class="p">[</span><span class="nx">method</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span></div><div class='line js-file-line' id='LC328'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">method</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">||</span> <span class="o">!</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC329'>			<span class="k">return</span> <span class="nx">_init</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line js-file-line' id='LC330'>		<span class="p">}</span></div><div class='line js-file-line' id='LC331'>		<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line js-file-line' id='LC332'>	<span class="p">};</span></div><div class='line js-file-line' id='LC333'><br></div><div class='line js-file-line' id='LC334'>	<span class="nx">$</span><span class="p">.</span><span class="nx">stepper</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC335'>		<span class="k">if</span> <span class="p">(</span><span class="nx">method</span> <span class="o">===</span> <span class="s2">&quot;defaults&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC336'>			<span class="nx">pub</span><span class="p">.</span><span class="nx">defaults</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span></div><div class='line js-file-line' id='LC337'>		<span class="p">}</span></div><div class='line js-file-line' id='LC338'>	<span class="p">};</span></div><div class='line js-file-line' id='LC339'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05767s from github-fe140-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-12d5fda141e78e513749dddbc56445fe172cbd9a.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-36426d81ba0cece95616b181627528875c6bfb56.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

