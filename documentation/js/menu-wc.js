'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">API de Conversión de Monedas BBVA</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-131c1a6d8bba3d2d2a9a3ca3bb6063343b12c0e62b2eeb9aef42b2a7759744fdf890d7f047abefcf98749aae9c010aa8bfb2836b8afc06139e7d517234ed9f9e"' : 'data-bs-target="#xs-controllers-links-module-AppModule-131c1a6d8bba3d2d2a9a3ca3bb6063343b12c0e62b2eeb9aef42b2a7759744fdf890d7f047abefcf98749aae9c010aa8bfb2836b8afc06139e7d517234ed9f9e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-131c1a6d8bba3d2d2a9a3ca3bb6063343b12c0e62b2eeb9aef42b2a7759744fdf890d7f047abefcf98749aae9c010aa8bfb2836b8afc06139e7d517234ed9f9e"' :
                                            'id="xs-controllers-links-module-AppModule-131c1a6d8bba3d2d2a9a3ca3bb6063343b12c0e62b2eeb9aef42b2a7759744fdf890d7f047abefcf98749aae9c010aa8bfb2836b8afc06139e7d517234ed9f9e"' }>
                                            <li class="link">
                                                <a href="controllers/CurrencyConversionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrencyConversionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-131c1a6d8bba3d2d2a9a3ca3bb6063343b12c0e62b2eeb9aef42b2a7759744fdf890d7f047abefcf98749aae9c010aa8bfb2836b8afc06139e7d517234ed9f9e"' : 'data-bs-target="#xs-injectables-links-module-AppModule-131c1a6d8bba3d2d2a9a3ca3bb6063343b12c0e62b2eeb9aef42b2a7759744fdf890d7f047abefcf98749aae9c010aa8bfb2836b8afc06139e7d517234ed9f9e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-131c1a6d8bba3d2d2a9a3ca3bb6063343b12c0e62b2eeb9aef42b2a7759744fdf890d7f047abefcf98749aae9c010aa8bfb2836b8afc06139e7d517234ed9f9e"' :
                                        'id="xs-injectables-links-module-AppModule-131c1a6d8bba3d2d2a9a3ca3bb6063343b12c0e62b2eeb9aef42b2a7759744fdf890d7f047abefcf98749aae9c010aa8bfb2836b8afc06139e7d517234ed9f9e"' }>
                                        <li class="link">
                                            <a href="injectables/CurrencyConversionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrencyConversionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-3ae31296d69fd90d94eb25c1c9ca3899a046622b06787575630596b8a3bab40148bc59f688989c3ae6ee16286251b7146f047be35a9ec9003e9cfdf7663e2984"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-3ae31296d69fd90d94eb25c1c9ca3899a046622b06787575630596b8a3bab40148bc59f688989c3ae6ee16286251b7146f047be35a9ec9003e9cfdf7663e2984"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-3ae31296d69fd90d94eb25c1c9ca3899a046622b06787575630596b8a3bab40148bc59f688989c3ae6ee16286251b7146f047be35a9ec9003e9cfdf7663e2984"' :
                                        'id="xs-injectables-links-module-AuthModule-3ae31296d69fd90d94eb25c1c9ca3899a046622b06787575630596b8a3bab40148bc59f688989c3ae6ee16286251b7146f047be35a9ec9003e9cfdf7663e2984"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigurationModule.html" data-type="entity-link" >ConfigurationModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CurrencyConversionController.html" data-type="entity-link" >CurrencyConversionController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ConvertCurrencyDto.html" data-type="entity-link" >ConvertCurrencyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CurrencyConversion.html" data-type="entity-link" >CurrencyConversion</a>
                            </li>
                            <li class="link">
                                <a href="classes/CurrencyConversionException.html" data-type="entity-link" >CurrencyConversionException</a>
                            </li>
                            <li class="link">
                                <a href="classes/CurrencyConversionRequestDto.html" data-type="entity-link" >CurrencyConversionRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CurrencyConversionResponseDto.html" data-type="entity-link" >CurrencyConversionResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExternalApiException.html" data-type="entity-link" >ExternalApiException</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvalidCurrencyException.html" data-type="entity-link" >InvalidCurrencyException</a>
                            </li>
                            <li class="link">
                                <a href="classes/NegativeAmountException.html" data-type="entity-link" >NegativeAmountException</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CurrencyApiAdapter.html" data-type="entity-link" >CurrencyApiAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CurrencyConversionService.html" data-type="entity-link" >CurrencyConversionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CurrencyApiResponse.html" data-type="entity-link" >CurrencyApiResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CurrencyConversionRepository.html" data-type="entity-link" >CurrencyConversionRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CurrencyConversionService.html" data-type="entity-link" >CurrencyConversionService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});