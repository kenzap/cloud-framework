import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave, uo } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import { linkProps } from '../commonComponents/link/link';
import { hexToRGB } from '../commonComponents/helpers/helpers';
import Edit from './edit';

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
        '--textColor': `${ attributes.textColor }`,
        '--textColor4': `${ hexToRGB(attributes.textColor3, attributes.opacity/100) }`,
        '--textColor5': `${ hexToRGB(attributes.textColor4, attributes.opacity/100) }`,
        '--angle': `${ attributes.angle }deg`,
        '--borderRadius': `${ attributes.borderRadius }px`,
    };

    if ( attributes.img1 != "none" ){ vars["--img1"] = 'url('+ uo(attributes.img1) +')'; vars['--img1S'] = `${ attributes.img1Size }px` }else{ vars["--img1"] = 'unset'; vars['--img1S'] = '0';}
 
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
        'title': __( '- Note', 'kenzap-cta' ),
        'font-size': 20,
        'font-weight': 3,
        'line-height': 20,
        'letter-spacing': 90,
        'margin-bottom': 10,
        'color': '#ffffff',
    },
    {
        'title': __( '- Title', 'kenzap-cta' ),
        'type': 'title',
        'font-size': 70,
        'font-weight': 2,
        'line-height': 70,
        'letter-spacing': 110,
        'margin-bottom': 30,
        'color': '#ffffff'
    },
    {
        'title': __( '- Location', 'kenzap-cta' ),
        'font-size': 15,
        'font-weight': 5,
        'line-height': 27,
        'margin-bottom': 0,
        'color': '#ffffff'
    },
    {
        'title': __( '- Button', 'kenzap-cta' ),
        'type': 'button',
        'font-weight': 4,
        'line-height': 30,
        'margin-top': 30,

        'font-size': 16,
        'padding-top': 12,
        'padding-right': 48,
        'padding-bottom': 12,
        'padding-left': 48,

        'border-radius': 4,
        'border-width': 0,
        'color': '#ffffff',
        'background-color': '#ee65af',
        'hover-color': '#ee65af',
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
registerBlockType( 'kenzap/cta-19', {
    title: __( 'Countdown Banner', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'Banner', 'kenzap-cta' ),
        __( 'call to action, kenzap cta 19', 'kenzap-cta' ),
        __( 'event banner', 'kenzap-cta' ),
    ],
    html: true,
    supports: {
        align: [ 'full', 'wide' ],
        anchor: true,
    },
    attributes: {
        ...blockProps,
        ...linkProps,

        align: {
            type: 'string',
            default: 'full',
        },

        caption: {
            type: 'string',
            default: __( '<strong>SHEILA ON 7</strong> LIVE CONCERT', 'kenzap-cta' ),
        },

        title: {
            type: 'string',
            default: __( 'Steeve van Buuren', 'kenzap-cta' ),
        },

        location: {
            type: 'string',
            default: __( 'Alun-alun Selatan, Yogyakarta, Indonesia', 'kenzap-cta' ),
        },

        left: {
            type: 'string',
            default: __( '17 TICKETS LEFT!', 'kenzap-cta' ),
        },

        countdown: {
            type: 'boolean',
            default: true,
        },

        end_date: {
			type: 'string',
			default: ''
		},

        angle: {
            type: 'number',
            default: 135,
        },

        cbYear: {
            type: 'boolean',
            default: false,
        },

        cbMonth: {
            type: 'boolean',
            default: false,
        },

        cbDay: {
            type: 'boolean',
            default: true,
        },

        cbHour: {
            type: 'boolean',
            default: true,
        },

        cbMinute: {
            type: 'boolean',
            default: true,
        },

        cbSecond: {
            type: 'boolean',
            default: true,
        },

        titleSize: {
            type: 'number',
            default: 70,
        },

        borderRadius: {
            type: 'number',
            default: 5,
        },

        borderRadius2: {
            type: 'number',
            default: 50,
        },

        textThickness: {
            type: 'number',
            default: 2,
        },

        openFirst: {
            type: 'boolean',
            default: true,
        },

        textColor: {
            type: 'string',
            //default: '#ffffff',
        },

        textColor3: {
            type: 'string',
            //default: '#750179',
        },

        textColor4: {
            type: 'string',
            //default: '#d61010',
        },

        btnStyle: {
            type: 'string',
            default: 'kps1',
        },

        opacity: {
            type: 'number',
            default: 89,
        },

        img1: {
            type: 'string',
            default: uo(window.kenzap_cta_path + "images/location.svg"),
        },

        img1Size: {
            type: 'number',
            default: 10,
        },
        
        alt1: {
            type: 'string',
            default: 'image',
        },

        isFirstLoad: {
            type: 'boolean',
            default: true,
        },

        blockUniqId: {
            type: 'number',
            default: 0,
        },

        typography: {
            type: 'array',
            default: [],
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-19/preview.jpeg' }` } /> );

        if(props.attributes.isFirstLoad){

            props.setAttributes( { backgroundImage: uo(window.kenzap_cta_path + "images/banner-img-2.jpg"), backgroundImageId:10 } );
            props.setAttributes( { textColor:'#ffffff', textColor3:'#007cba', textColor4:'#004060', backgroundColor: '#fff', containerPadding: 140 } );
            props.setAttributes( { isFirstLoad: false } );
        }

        if (typeof kenzapBanner2 === 'function') { kenzapBanner2($); }
 
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
                    className={ `kp-bn2 ${ attributes.btnStyle }  block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div class="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div class="kp-content">

                            { attributes.caption && <RichText.Content
                                tagName="p"
                                className="caption"
                                value={ attributes.caption }
                                style={ getTypography( attributes, 0 ) }
                            /> }

                            { attributes.title && <RichText.Content
                                tagName="h1"
                                className="title"
                                value={ attributes.title }
                                style={ getTypography( attributes, 1 ) }
                            /> }

                            { attributes.countdown && <ul class="count-down" data-yeart={ __( 'Years' ) } data-montht={ __( 'Months' ) } data-dayt={ __( 'Days' ) } data-hourt={ __( 'Hours' ) } data-minutet={ __( 'Minutes' ) } data-secondt={ __( 'Seconds' ) } data-time={ attributes.end_date } data-year={ attributes.cbYear } data-month={ attributes.cbMonth } data-day={ attributes.cbDay } data-hour={ attributes.cbHour } data-minute={ attributes.cbMinute } data-second={ attributes.cbSecond }></ul> }
                            <div class="location">
                                <p>
                                    <span class="kpim" style={ getTypography( attributes, 2, "--cl" ) }></span>
                                    <RichText.Content
                                        tagName="span"
                                        className="kp-loc"
                                        value={ attributes.location }
                                        style={ getTypography( attributes, 2 ) }
                                        />
                                </p>
                            </div>

                            { attributes.btnLink && <a
                                    className="action" 
                                    href={ attributes.btnLink }
                                    target={ attributes.linkNew ? '_blank' : '_self' }
                                    rel="noopener noreferrer"
                                    style={ getTypography( attributes, 3 ) }
                                    >
                                    { attributes.btnText }
                            </a> }

                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
