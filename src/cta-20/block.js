import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;InnerBlocks
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave, uo } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
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
        '--textColor3': `${ hexToRGB(attributes.textColor2, 0.7) }`,
        '--textThickness': `${ attributes.textThickness }px`,
        '--textColor4': `${ hexToRGB(attributes.textColor3, attributes.opacity/100) }`,
        '--textColor5': `${ hexToRGB(attributes.textColor4, attributes.opacity/100) }`,
        '--angle': `${ attributes.angle }deg`,
        '--borderRadius': `${ attributes.borderRadius }px`,
    };

    if ( attributes.img1 != "none" ){ vars["--img1"] = 'url('+ uo(attributes.img1) +')'; vars['--img1S'] = `${ attributes.img1Size }px` }else{ vars["--img1"] = 'unset'; vars['--img1S'] = '0';}
    if ( attributes.img2 != "none" ){ vars["--img2"] = 'url('+ uo(attributes.img2) +')'; vars['--img2S'] = `${ attributes.img2Size }px` }else{ vars["--img2"] = 'unset'; vars['--img2S'] = '0';}

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
        'type': 'title',
        'font-size': 36,
        'font-weight': 5,
        'line-height': 40,
        'margin-bottom': 20,
        'color': '#ffffff',
    },
    {
        'title': __( '- Subtitle', 'kenzap-cta' ),
        'type': 'title',
        'font-size': 26,
        'font-weight': 4,
        'line-height': 30,
        'margin-bottom': 45,
        'color': '#ffffff'
    },
    {
        'title': __( '- Search', 'kenzap-cta' ),
        'font-size': 22,
        'font-weight': 5,
        'line-height': 22,
        'padding-top': 25,
        'padding-right': 80,
        'padding-bottom': 25,
        'padding-left': 45,
        'margin-bottom': 0,
        'color': '-'
    },
    {
        'title': __( '- Location', 'kenzap-cta' ),
        'font-size': 15,
        'font-weight': 4,
        'line-height': 27,
        'margin-bottom': 0,
        'color': '#ffffff'
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
registerBlockType( 'kenzap/cta-20', {
    title: __( 'Event Search Banner', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 20', 'kenzap-cta' ),
        __( 'call to action banner', 'kenzap-cta' ),
        __( 'search', 'kenzap-cta' ),
    ],
    html: true,
    supports: {
        align: [ 'full', 'wide' ],
        anchor: true,
    },
    attributes: {
        ...blockProps,

        align: {
            type: 'string',
            default: 'full',
        },

        caption: {
            type: 'string',
            default: __( 'Meet your favorite artists, sport teams and parties', 'kenzap-cta' ),
        },

        title: {
            type: 'string',
            default: __( 'Make Your Dream Come True', 'kenzap-cta' ),
        },

        search: {
            type: 'string',
            default: __( 'Search Artist, Team, or Venue', 'kenzap-cta' ),
        },

        link: {
            type: 'string',
            default: __( 'San Francisco <a href="#">Change Location</a>', 'kenzap-cta' ),
        },

        angle: {
            type: 'number',
            default: 135,
        },

        titleSize: {
            type: 'number',
            default: 36,
        },

        borderRadius: {
            type: 'number',
            default: 8,
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
            default: '#ffffff',
        },

        textColor2: {
            type: 'string',
            default: '#ff6600',
        },

        textColor23: {
            type: 'string',
            default: '#ffffff',
        },

        textColor3: {
            type: 'string',
            default: '#750179',
        },

        textColor4: {
            type: 'string',
            default: '#d61010',
        },

        action: {
            type: 'string',
            default: '/search-results/',
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
            default: 15,
        },
                
        alt1: {
            type: 'string',
            default: 'image',
        },

        img2: {
            type: 'string',
            default: uo(window.kenzap_cta_path + "images/search.svg"),
        },

        img2Size: {
            type: 'number',
            default: 32,
        },
        
        alt2: {
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-20/preview.jpeg' }` } /> );

        if(props.attributes.isFirstLoad){

            props.setAttributes( { backgroundImage: uo(window.kenzap_cta_path + "images/banner-img-3.jpg"), backgroundImageId:10 } );
            props.setAttributes( { backgroundColor: '#fff', containerPadding: 140 } );
            props.setAttributes( { isFirstLoad: false } );
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
                    className={ `kp-bn3 block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div class="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div class="kp-content">

                            { attributes.title && <RichText.Content
                                tagName="h1"
                                className="kpt"
                                value={ attributes.title }
                                style={ getTypography( attributes, 0 ) }
                            /> }

                            { attributes.caption && <RichText.Content
                                tagName="p"
                                className="kpc"
                                value={ attributes.caption }
                                style={ getTypography( attributes, 1 ) }
                            /> }

                            <div class="kps">
                                <form action={ attributes.action } >
                                    <input name="q" type="text" style={ getTypography( attributes, 2 ) } placeholder={ attributes.search }/>
                                    <span class="kpi"></span>
                                </form>
                            </div>
                            <div class="kpl">
                                <p>
                                    <span class="kpim" ></span>
                                    { attributes.link && <RichText.Content
                                        tagName="span"
                                        className="kp-s"
                                        value={ attributes.link }
                                        style={ getTypography( attributes, 3 ) }
                                    /> }
                                </p>
                            </div>

                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
