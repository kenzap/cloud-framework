import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave, uo } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import Edit from './edit';

/**
 * Provides the initial data for new block
 */
export const defaultItem = {
    title: __( 'A LOST SOUL OF AN OLD WARRIOR', 'kenzap-cta' ),
    description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Auctor a ornare odio', 'kenzap-cta' ),
    side: 'left',
    link: '#',
    linkn: false,
    btn: 'GET DETAILS',
    color: '#fff',
    color2: '#333',
    img1: uo(window.kenzap_cta_path + "images/info-img-1.jpg"),
    img2: uo(window.kenzap_cta_path + "images/info-img-2.jpg"),
    img3: uo(window.kenzap_cta_path + "images/info-img-3.jpg")
};

export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( 'A LOST SOUL OF AN OLD WARRIOR', 'kenzap-cta' ),
        description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Auctor a ornare odio', 'kenzap-cta' ),
        side: 'left',
        link: '#',
        linkn: false,
        btn: 'GET DETAILS',
        color: '#fff',
        color2: '#333',
        img1: uo(window.kenzap_cta_path + "images/info-img-1.jpg"),
        img2: uo(window.kenzap_cta_path + "images/info-img-2.jpg"),
        img3: uo(window.kenzap_cta_path + "images/info-img-3.jpg"),
        key: new Date().getTime() + 1,
    }, {
        title: __( 'THE FREEDOM WE STRIVE FOR', 'kenzap-cta' ),
        description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Auctor a ornare odio', 'kenzap-cta' ),
        side: 'right',
        link: '#',
        linkn: false,
        btn: 'GET DETAILS',
        color: '#fff',
        color2: '#333',
        img1: uo(window.kenzap_cta_path + "images/info-img-4.jpg"),
        img2: uo(window.kenzap_cta_path + "images/info-img-5.jpg"),
        img3: uo(window.kenzap_cta_path + "images/info-img-6.jpg"),
        key: new Date().getTime() + 2,
    }
] );

/**
 * Generate inline styles for custom settings of the block
 * @param {Object} attributes - of the block
 * @returns {Node} generated styles
 */
export const getStyles = attributes => {
    const kenzapContanerStyles = {
        maxWidth: `${ attributes.containerMaxWidth === '100%' ? '100%' : attributes.containerMaxWidth + 'px' }`,
        '--maxWidth': `${ attributes.containerMaxWidth === '100%' ? '100wh' : attributes.containerMaxWidth + ' ' } `,
    };

    const vars = {
        '--paddings': `${ attributes.containerPadding }`,
        '--paddings2': `${ attributes.containerSidePadding }px`,
    };

    if ( attributes.backgroundColor ) { vars["--backgroundColor"] = attributes.backgroundColor; }

    return {
        vars,
        kenzapContanerStyles,
    };
};

/**
 * Define typography defaults
 */
export const typographyArr = JSON.stringify([
    {
        'title': __( '- Title', 'kenzap-cta' ),
        'font-size': 33,
        'font-weight': 5,
        'line-height': 40,
        'margin-bottom': 20,
        'color': '#ffffff'
    },
    {
        'title': __( '- Description', 'kenzap-cta' ),
        'font-size': 17,
        'font-weight': 4,
        'line-height': 30,
        'margin-bottom': 10,
        'color': '#ffffff'
    },
    {
        'title': __( '- Button', 'kenzap-cta' ),
        'type': 'button',
        'font-weight': 4,
        'line-height': 30,
        'margin-top': 20,

        'font-size': 16,
        'padding-top': 12,
        'padding-right': 48,
        'padding-bottom': 12,
        'padding-left': 48,
        'border-radius': 4,

        'color': '#ffffff',
        'background-color': '#23282d',
        'hover-color': '#23282d',
        'hover-background-color': '#ffffff'
    },
]);

/**
 * Register: a Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'kenzap/cta-9', {
    title: __( 'Animated Multi Image Banner', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 9', 'kenzap-cta' ),
        __( 'Call to action', 'kenzap-cta' ),
        __( 'multi image banner', 'kenzap-cta' ),
    ],
    supports: {
        align: [ 'full', 'wide' ],
        anchor: true,
    },
    html: true,
    attributes: {
        ...blockProps,

        align: {
            type: 'string',
            default: 'full',
        },

        elements: {
            type: 'number',
            default: 2,
        },

        scrollAnime: {
            type: 'boolean',
            default: true,
        },

        items: {
            type: 'array',
            default: [],
        },

        typography: {
            type: 'array',
            default: [],
        },

        isFirstLoad: {
            type: 'boolean',
            default: true,
        },

        blockUniqId: {
            type: 'number',
            default: 0,
        },

        isVisible: {
            type: 'boolean',
            default: false,
        },

        randomValue: {
            type: 'string'
        },

        preview: {
            type: 'boolean',
            default: false,
        },
    },

    example: { attributes: { preview: true } },
    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     *
     * The "edit" property must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    edit: ( props ) => {

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-9/preview.jpeg' }` } /> );
        
        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                isFirstLoad: false,
            } );
            
            props.attributes.items = JSON.parse( defaultSubBlocks );
            if ( ! props.attributes.blockUniqId ) {
                props.setAttributes( {
                    blockUniqId: new Date().getTime(),
                } );
            }
        }

        return ( <Edit { ...props } /> );
    },

    /**
     * The save function defines the way in which the different attributes should be combined
     * into the final markup, which is then serialized by Gutenberg into post_content.
     *
     * The "save" property must be specified and must be a valid function.
     * @param {Object} props - attributes
     * @returns {Node} rendered component
     */
    save: function( props ) {
        const {
            className,
            attributes,
        } = props;

        const { vars, kenzapContanerStyles } = getStyles( props.attributes );

        return (
            <div id={ attributes.anchor } className={ className ? className : '' } style={ vars }>
                <ContainerSave
                    className={ `kpinf3 ${ attributes.topOffset > 0 ? 'topOffset': '' } block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                    { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }

                    { attributes.items && attributes.items.map( ( item, index ) => (

                        <div 
                            className={ `info-box kp-${ item.side }` } >

                            { item.side == 'left' &&
                            <div class="kenzap-row">

                                <div class="kenzap-col-6">
                                    <div className={ `kp-img ${ item.img2=='none' && item.img3=='none' ? 'kp-img100':'' }` } >
                                        { item.img1!='none' && <div 
                                            className={ `kp-img-1 ${ attributes.scrollAnime ? 'kp-animate':''}` }
                                            data-paroller-factor="0.1" 
                                            data-paroller-factor-xs="0.0"    
                                            data-paroller-factor-sm="0.0"  
                                            data-paroller-factor-md="0.0"  
                                            data-paroller-type="foreground"     
                                            data-paroller-direction="vertical"
                                            data-paroller-transition="all 0.8s ease-in">
                                            <img src={ uo(item.img1) } alt="image" />
                                        </div> }
                                        { item.img2!='none' && <div 
                                            className={ `kp-img-2 ${ attributes.scrollAnime ? 'kp-animate':''}` }
                                            data-paroller-factor="-0.1" 
                                            data-paroller-factor-xs="0.0"    
                                            data-paroller-factor-sm="0.0"  
                                            data-paroller-factor-md="0.0"  
                                            data-paroller-type="foreground"     
                                            data-paroller-direction="vertical"
                                            data-paroller-transition="all 0.8s ease-in">
                                            <img src={ uo(item.img2) } alt="image" />
                                        </div> } 
                                        { item.img3!='none' && <div 
                                            className={ `kp-img-3 ${ attributes.scrollAnime ? 'kp-animate':''}` }
                                            data-paroller-factor="0.1" 
                                            data-paroller-factor-xs="0.0"    
                                            data-paroller-factor-sm="0.0"  
                                            data-paroller-factor-md="0.0"  
                                            data-paroller-type="foreground"     
                                            data-paroller-direction="vertical"
                                            data-paroller-transition="all 0.8s ease-in">
                                            <img src={ uo(item.img3) } alt="image" />
                                        </div> }
                                    </div>
                                </div>

                                <div class="kenzap-col-6">
                                    <div 
                                        className={ `kp-content ${ attributes.scrollAnime ? 'kp-animate':''}` }
                                        data-paroller-factor="-0.1" 
                                        data-paroller-factor-xs="0.0"    
                                        data-paroller-factor-sm="0.0"  
                                        data-paroller-factor-md="0.0"  
                                        data-paroller-type="foreground"     
                                        data-paroller-direction="vertical"
                                        data-paroller-transition="all 0.8s ease-in">

                                        <RichText.Content
                                            tagName="h2"
                                            className="kp-h2"
                                            value={ item.title }
                                            style={ getTypography( attributes, 0 ) }
                                            />

                                        <RichText.Content
                                            tagName="p"
                                            className="kp-p"
                                            value={ item.description }
                                            style={ getTypography( attributes, 1 ) }
                                            />
                                            
                                        { item.btn && <a 
                                            target={ item.linkn=='true' ? '_blank':'' }
                                            className="bt2"
                                            style={ getTypography( attributes, 2 ) }
                                            rel="noopener noreferrer"
                                            href={ item.link } >{ item.btn }</a> 
                                        }
                                    </div>
                                </div>

                            </div> }

                            { item.side == 'right' &&
                            <div class="kenzap-row">

                                <div class="kenzap-col-6">
                                    <div 
                                        className={ `kp-content ${ attributes.scrollAnime ? 'kp-animate':''}` }
                                        data-paroller-factor="-0.1" 
                                        data-paroller-factor-xs="0.0"    
                                        data-paroller-factor-sm="0.0"  
                                        data-paroller-factor-md="0.0"  
                                        data-paroller-type="foreground"     
                                        data-paroller-direction="vertical"
                                        data-paroller-transition="all 0.8s ease-in">

                                        <RichText.Content
                                            tagName="h2"
                                            className="kp-h2"
                                            value={ item.title }
                                            style={ getTypography( attributes, 0 ) }
                                            />

                                        <RichText.Content
                                            tagName="p"
                                            className="kp-p"
                                            value={ item.description }
                                            style={ getTypography( attributes, 1 ) }
                                            />
                                            
                                        { item.btn && <a 
                                            target={ item.linkn=='true' ? '_blank':'' }
                                            className="bt2"
                                            style={ getTypography( attributes, 2 ) }
                                            rel="noopener noreferrer"
                                            href={ item.link } >{ item.btn }</a> 
                                        }
                                    </div>
                                </div>

                                <div class="kenzap-col-6">
                                    <div className={ `kp-img ${ item.img2=='none' && item.img3=='none' ? 'kp-img100':'' }` } >
                                        { item.img1!='none' && <div 
                                            className={ `kp-img-1 ${ attributes.scrollAnime ? 'kp-animate':''}` }
                                            data-paroller-factor="0.1" 
                                            data-paroller-factor-xs="0.0"    
                                            data-paroller-factor-sm="0.0"  
                                            data-paroller-factor-md="0.0"  
                                            data-paroller-type="foreground"     
                                            data-paroller-direction="vertical"
                                            data-paroller-transition="all 0.8s ease-in">
                                            <img src={ uo(item.img1) } alt="image" />
                                        </div> }
                                        { item.img2!='none' && <div 
                                            className={ `kp-img-2 ${ attributes.scrollAnime ? 'kp-animate':''}` }
                                            data-paroller-factor="-0.1" 
                                            data-paroller-factor-xs="0.0"    
                                            data-paroller-factor-sm="0.0"  
                                            data-paroller-factor-md="0.0"  
                                            data-paroller-type="foreground"     
                                            data-paroller-direction="vertical"
                                            data-paroller-transition="all 0.8s ease-in">
                                            <img src={ uo(item.img2) } alt="image" />
                                        </div> } 
                                        { item.img3!='none' && <div 
                                            className={ `kp-img-3 ${ attributes.scrollAnime ? 'kp-animate':''}` }
                                            data-paroller-factor="0.1" 
                                            data-paroller-factor-xs="0.0"    
                                            data-paroller-factor-sm="0.0"  
                                            data-paroller-factor-md="0.0"  
                                            data-paroller-type="foreground"     
                                            data-paroller-direction="vertical"
                                            data-paroller-transition="all 0.8s ease-in">
                                            <img src={ uo(item.img3) } alt="image" />
                                        </div> }
                                    </div>
                                </div>

                            </div> }

                        </div>

                        ) ) }
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>

                </ContainerSave>
            </div>
        );
    },
} );
