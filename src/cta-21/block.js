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
        '--textColor2': `${ hexToRGB(attributes.textColor2, 1) }`,
        '--textColor4': `${ hexToRGB(attributes.textColor3, attributes.opacity/100) }`,
        '--textColor5': `${ hexToRGB(attributes.textColor4, attributes.opacity/100) }`,
        '--angle': `${ attributes.angle }deg`,
    };

    if ( attributes.img1 != "none" ){ vars["--img1"] = 'url('+ uo(attributes.img1) +')'; }else{ vars["--img1"] = 'unset'; }
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
        'font-size': 54,
        'font-size-t': 50,
        'font-size-m': 40,
        'font-weight': 5,
        'line-height': 58,
        'margin-bottom': 30,
        'color': '#ffffff',
    },
    {
        'title': __( '- Note', 'kenzap-cta' ),
        'font-size': 18,
        'font-weight': 4,
        'line-height': 26,
        'margin-bottom': 45,
        'color': '#ffffff'
    },
    {
        'title': __( '- Button left', 'kenzap-cta' ),
        'type': 'button',
        'font-size': 16,
        'font-weight': 4,
        'line-height': 30,
        'margin-right': 10,
        'margin-bottom': 10,

        'padding-top': 12,
        'padding-right': 48,
        'padding-bottom': 12,
        'padding-left': 48,
        'border-radius': 4,

        'border-width': 1,
        'color': '#ffffff',
        'background-color': '#7c529c',
        'border-color': '#7c529c',
        'hover-color': '#ffffff',
        'hover-border-color': '#7c529c',
        'hover-background-color': 'transparent'
    },
    {
        'title': __( '- Button right', 'kenzap-cta' ),
        'type': 'button',
        'font-size': 16,
        'font-weight': 4,
        'line-height': 30,
        'margin-right': 10,
        'margin-bottom': 10,

        'padding-top': 12,
        'padding-right': 48,
        'padding-bottom': 12,
        'padding-left': 48,

        'border-radius': 4,
        'border-width': 1,
        'color': '#ffffff',
        'border-color': '#fd226a',
        'background-color': 'transparent',
        'hover-color': '#ffffff',
        'hover-background-color': '#fd226a'
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
registerBlockType( 'kenzap/cta-21', {
    title: __( 'YouTube Banner', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 21', 'kenzap-cta' ),
        __( 'call to action', 'kenzap-cta' ),
        __( 'conference banner', 'kenzap-cta' ),
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

        title: {
            type: 'string',
            default: __( '<strong>3</strong> Days <br><strong>10</strong> Workshops <br><strong>21</strong> Speakers <br>', 'kenzap-cta' ),
        },

        caption: {
            type: 'string',
            default: __( 'Meet your favorite artists, sport teams and parties', 'kenzap-cta' ),
        },

        video: {
            type: 'string',
            default: '',
        },

        link: {
            type: 'string',
            default: __( '<a href="#">Presentation</a> <a href="#">Tickets</a>', 'kenzap-cta' ),
        },

        link2: {
            type: 'string',
            default: __( '<a href="#">Tickets</a>', 'kenzap-cta' ),
        },

        angle: {
            type: 'number',
            default: 135,
        },

        openFirst: {
            type: 'boolean',
            default: true,
        },

        img1: {
            type: 'string',
            default: uo(window.kenzap_cta_path + "images/wave.svg"),
        },

        textColor2: {
            type: 'string',
            //default: '#fd226a',
        },

        textColor3: {
            type: 'string',
            //default: '#750179',
        },

        textColor4: {
            type: 'string',
            //default: '#d61010',
        },

        action: {
            type: 'string',
            default: '/',
        },

        opacity: {
            type: 'number',
            default: 89,
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-21/preview.jpeg' }` } /> );

        if(props.attributes.isFirstLoad){

            props.setAttributes( { textColor2: '#fd226a', textColor3: '#750179', textColor4: '#d61010', backgroundColor: '#fff', containerPadding: 140, containerSidePadding: 15, backgroundImage: uo(window.kenzap_cta_path + "images/banner-img-3.jpg"), backgroundImageId:10, backgroundStyle:'cover' } );
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
                    className={ `kp-bn5 ${ attributes.video ? 'vid':'nvid' } block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    { attributes.video && 
                        <div> 
                            <div class="kp-video">
                                <div id="video" data-video={ attributes.video }></div>
                            </div> 

                            <div class="kp-content" >
                                <div class="kenzap-container" style={ kenzapContanerStyles }>
                                    { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                                
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

                                    { attributes.btnLink && <a
                                        className="kpa" 
                                        href={ attributes.btnLink }
                                        target={ attributes.linkNew ? '_blank' : '_self' }
                                        rel="noopener noreferrer"
                                        style={ getTypography( attributes, 2 ) }
                                        >
                                        { attributes.btnText }
                                    </a> }

                                    { attributes.btnLink2 && <a
                                        className="kpa" 
                                        href={ attributes.btnLink2 }
                                        target={ attributes.linkNew2 ? '_blank' : '_self' }
                                        rel="noopener noreferrer"
                                        style={ getTypography( attributes, 3 ) }
                                        >
                                        { attributes.btnText2 }
                                    </a> }

                                    { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                                </div>
                            </div>
                        </div>
                    }

                    { !attributes.video && 

                        <div class="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                            <div class="kp-content" >
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

                                { attributes.btnLink && <a
                                    className="kpa" 
                                    href={ attributes.btnLink }
                                    target={ attributes.linkNew ? '_blank' : '_self' }
                                    rel="noopener noreferrer"
                                    style={ getTypography( attributes, 2 ) }
                                    >
                                    { attributes.btnText }
                                </a> }

                                { attributes.btnLink2 && <a
                                    className="kpa" 
                                    href={ attributes.btnLink2 }
                                    target={ attributes.linkNew2 ? '_blank' : '_self' }
                                    rel="noopener noreferrer"
                                    style={ getTypography( attributes, 3 ) }
                                    >
                                    { attributes.btnText2 }
                                </a> }
                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                        </div>

                    }
                </ContainerSave>
            </div>
        );
    },
} );
