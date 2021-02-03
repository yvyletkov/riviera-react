import React from "react";
import MapSection from "../../shared/MapSection/MapSection";
import s from "./SearchPage.module.scss";
import styled from "styled-components";

const Wrapper = styled.div`

  .ya-page_js_yes .ya-site-form_inited_no {display: none;}

  #ya-site-form0 .ya-site-form__search-input {
    padding: 18px 28px;
  }
  
  .ya-site-form__wrap {
    border-radius: 5px;
    overflow: hidden;
  }

  #ya-site-form0 .ya-site-form__form .ya-site-form__input-text {
    height: 25px;
    box-shadow: none;
    border: none;
    padding: 0 10px;
  }
  
  #ya-site-results {
    color: #000000;
    background: #FFFFFF;
  }

  #ya-site-results .b-pager__current,
  #ya-site-results .b-serp-item__number {
    color: #000000 !important;
  }

  #ya-site-results {
    font-family: Arial !important;
  }

  #ya-site-results :visited,
  #ya-site-results .b-pager :visited,
  #ya-site-results .b-foot__link:visited,
  #ya-site-results .b-copyright__link:visited {
    color: #800080;
  }

  #ya-site-results a:link,
  #ya-site-results a:active,
  #ya-site-results .b-pseudo-link,
  #ya-site-results .b-head-tabs__link,
  #ya-site-results .b-head-tabs__link:link,
  #ya-site-results .b-head-tabs__link:visited,
  #ya-site-results .b-dropdown__list .b-pseudo-link,
  #ya-site-results .b-dropdowna__switcher .b-pseudo-link,
  .b-popupa .b-popupa__content .b-menu__item,
  #ya-site-results .b-foot__link:link,
  #ya-site-results .b-copyright__link:link,
  #ya-site-results .b-serp-item__mime,
  #ya-site-results .b-pager :link {
    color: #0033FF;
  }

  #ya-site-results :link:hover,
  #ya-site-results :visited:hover,
  #ya-site-results .b-pseudo-link:hover {
    color: #FF0000 !important;
  }

  #ya-site-results .l-page,
  #ya-site-results .b-bottom-wizard {
    font-size: 13px;
  }

  #ya-site-results .b-pager {
    font-size: 1.25em;
  }

  #ya-site-results .b-serp-item__text,
  #ya-site-results .ad {
    font-style: normal;
    font-weight: normal;
  }

  #ya-site-results .b-serp-item__title-link,
  #ya-site-results .ad .ad-link {
    font-style: normal;
    font-weight: normal;
  }

  #ya-site-results .ad .ad-link a {
    font-weight: bold;
  }

  #ya-site-results .b-serp-item__title,
  #ya-site-results .ad .ad-link {
    font-size: 16px;
  }

  #ya-site-results .b-serp-item__title-link:link,
  #ya-site-results .b-serp-item__title-link {
    font-size: 1em;
  }

  #ya-site-results .b-serp-item__number {
    font-size: 13px;
  }

  #ya-site-results .ad .ad-link a {
    font-size: 0.88em;
  }

  #ya-site-results .b-serp-url,
  #ya-site-results .b-direct .url,
  #ya-site-results .b-direct .url a:link,
  #ya-site-results .b-direct .url a:visited {
    font-size: 13px;
    font-style: normal;
    font-weight: normal;
    color: #329932;
  }

  #ya-site-results .b-serp-item__links-link {
    font-size: 13px;
    font-style: normal;
    font-weight: normal;
    color: #000000 !important;
  }

  #ya-site-results .b-pager__inactive,
  #ya-site-results .b-serp-item__from,
  #ya-site-results .b-direct__head-link,
  #ya-site-results .b-image__title,
  #ya-site-results .b-video__title {
    color: #000000 !important;
  }

  #ya-site-results .b-pager__current,
  #ya-site-results .b-pager__select {
    background: #E0E0E0;
  }

  #ya-site-results .b-foot,
  #ya-site-results .b-line {
    border-top-color: #E0E0E0;
  }

  #ya-site-results .b-dropdown__popup .b-dropdown__list,
  .b-popupa .b-popupa__content {
    background-color: #FFFFFF;
  }

  .b-popupa .b-popupa__tail {
    border-color: #E0E0E0 transparent;
  }

  .b-popupa .b-popupa__tail-i {
    border-color: #FFFFFF transparent;
  }

  .b-popupa_direction_left.b-popupa_theme_ffffff .b-popupa__tail-i,
  .b-popupa_direction_right.b-popupa_theme_ffffff .b-popupa__tail-i {
    border-color: transparent #FFFFFF;
  }

  #ya-site-results .b-dropdowna__popup .b-menu_preset_vmenu .b-menu__separator {
    border-color: #E0E0E0;
  }

  .b-specification-list,
  .b-specification-list .b-pseudo-link,
  .b-specification-item__content label,
  .b-specification-item__content .b-link,
  .b-specification-list .b-specification-list__reset .b-link {
    color: #000000 !important;
    font-family: Arial;
    font-size: 13px;
    font-style: normal;
    font-weight: normal;
  }

  .b-specification-item__content .b-calendar__title {
    font-family: Arial;
    color: #000000;
    font-size: 13px;
    font-style: normal;
    font-weight: normal;
  }

  .b-specification-item__content .b-calendar-month__day_now_yes {
    color: #E0E0E0;
  }

  .b-specification-item__content .b-calendar .b-pseudo-link {
    color: #000000;
  }

  .b-specification-item__content {
    font-family: Arial !important;
    font-size: 13px;
  }

  .b-specification-item__content :visited {
    color: #800080;
  }

  .b-specification-item__content .b-pseudo-link:hover,
  .b-specification-item__content :visited:hover {
    color: #FF0000 !important;
  }

  #ya-site-results .b-popupa .b-popupa__tail-i {
    background: #FFFFFF;
    border-color: #E0E0E0 !important;
  }
`

const SearchPage = () => {


    const initForm = function (w, d, c) {
        var s = d.createElement('script'), h = d.getElementsByTagName('script')[0], e = d.documentElement;
        if ((' ' + e.className + ' ').indexOf(' ya-page_js_yes ') === -1) {
            e.className += ' ya-page_js_yes';
        }
        s.type = 'text/javascript';
        s.async = true;
        s.charset = 'utf-8';
        s.src = (d.location.protocol === 'https:' ? 'https:' : 'http:') + '//site.yandex.net/v2.0/js/all.js';
        h.parentNode.insertBefore(s, h);
        (w[c] || (w[c] = [])).push(function () {
            window.Ya.Site.Form.init()
        })
    }

    const initResults = function (w, d, c) {
        var s = d.createElement('script'), h = d.getElementsByTagName('script')[0];
        s.type = 'text/javascript';
        s.async = true;
        s.charset = 'utf-8';
        s.src = (d.location.protocol === 'https:' ? 'https:' : 'http:') + '//site.yandex.net/v2.0/js/all.js';
        h.parentNode.insertBefore(s, h);
        (w[c] || (w[c] = [])).push(function () {
            window.Ya.Site.Results.init();
        })
    }


    React.useEffect(() => {
        initForm(window, document, 'yandex_site_callbacks');
        initResults(window, document, 'yandex_site_callbacks')
    }, [])

    React.useEffect(() => document.title = `Поиск - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    return (<>



            <section style={{marginTop: window.matchMedia('(max-width: 1024px)').matches ? '100px' : '180px'}}
                     className='section'>

                <Wrapper>
                    <div className={s.container}>

                        <div className="ya-site-form ya-site-form_inited_no"
                             data-bem="{&quot;action&quot;:&quot;http://localhost:3000/search&quot;,&quot;arrow&quot;:false,&quot;bg&quot;:&quot;#ff6c39&quot;,&quot;fontsize&quot;:12,&quot;fg&quot;:&quot;#000000&quot;,&quot;language&quot;:&quot;ru&quot;,&quot;logo&quot;:&quot;rb&quot;,&quot;publicname&quot;:&quot;Поиск по rivierasunrise.ru&quot;,&quot;suggest&quot;:true,&quot;target&quot;:&quot;_self&quot;,&quot;tld&quot;:&quot;ru&quot;,&quot;type&quot;:2,&quot;usebigdictionary&quot;:true,&quot;searchid&quot;:2445728,&quot;input_fg&quot;:&quot;#000000&quot;,&quot;input_bg&quot;:&quot;#ffffff&quot;,&quot;input_fontStyle&quot;:&quot;normal&quot;,&quot;input_fontWeight&quot;:&quot;normal&quot;,&quot;input_placeholder&quot;:&quot;Что Вы хотите найти?&quot;,&quot;input_placeholderColor&quot;:&quot;#000000&quot;,&quot;input_borderColor&quot;:&quot;#cc6600&quot;}">
                            <form action="https://yandex.ru/search/site/" method="get" target="_self"
                                  accept-charset="utf-8">
                                <input
                                    type="hidden" name="searchid" value="2445728"/><input type="hidden" name="l10n"
                                                                                          value="ru"/><input
                                type="hidden" name="reqenc" value=""/><input type="search" name="text" value=""/><input
                                type="submit" value="Найти"/></form>
                        </div>

                        <div id="ya-site-results"
                             data-bem="{&quot;tld&quot;: &quot;ru&quot;,&quot;language&quot;: &quot;ru&quot;,&quot;encoding&quot;: &quot;&quot;,&quot;htmlcss&quot;: &quot;1.x&quot;,&quot;updatehash&quot;: false}"/>

                    </div>


                    </Wrapper>

            </section>


            <section className='section last'>
                <MapSection/>
            </section>
        </>
    );
}

export default SearchPage;
