import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave, uo } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import { hexToRGB, sanitizeAttr } from '../commonComponents/helpers/helpers';
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
        '--textColor4': `${ hexToRGB(attributes.textColor3, attributes.opacity/100) }`,
        '--textColor5': `${ hexToRGB(attributes.textColor4, attributes.opacity/100) }`,
        '--textColor23': `${ hexToRGB(attributes.textColor3, attributes.mopacity/100) }`,
        '--angle': `${ attributes.angle }deg`,
    };

    if ( attributes.img1 != "none" ){ vars["--img1"] = 'url('+ uo(attributes.img1) +')';  }else{ vars["--img1"] = 'unset'; }

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
        'font-size': 55,
        'font-size-t': 52,
        'font-size-m': 46,
        'font-weight': 4,
        'line-height': 58,
        'margin-bottom': 15,
        'color': '#ffffff',
    },
    {
        'title': __( '- Description', 'kenzap-cta' ),
        'font-size': 15,
        'font-weight': 4,
        'line-height': 23,
        'margin-bottom': 30,
        'color': '#ffffff'
    },
    {
        'title': __( '- Dropdown', 'kenzap-cta' ),
        'type': 'button',
        'font-size': 16,
        'font-weight': 4,
        'line-height': 30,

        'padding-top': 12,
        'padding-right': 48,
        'padding-bottom': 12,
        'padding-left': 48,

        'margin-right': 0,
        'margin-bottom': 20,
        'border-radius': 4,
        'color': '#6542e0',
        'hover-color': '#6542e0',
        'background-color': '#ffffff',
        'hover-background-color': '#ffffff',
    },
    {
        'title': __( '- Button', 'kenzap-cta' ),
        'type': 'button',
        'font-size': 16,
        'font-weight': 4,
        'line-height': 30,

        'padding-top': 12,
        'padding-right': 48,
        'padding-bottom': 12,
        'padding-left': 48,

        'margin-right': 20,
        'margin-bottom': 20,
        'margin-left': 20,
        'border-radius': 4,
        'color': '#6542e0',
        'background-color': '#ffffff',
        'hover-color': '#ffffff',
        'hover-background-color': '#6542e0',
        'hover-border-color': '#ffffff',
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
registerBlockType( 'kenzap/cta-23', {
    title: __( 'Dropdown Menu Banner', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'banner', 'kenzap-cta' ),
        __( 'call to action, kenzap cta 23', 'kenzap-cta' ),
        __( 'select dropdown', 'kenzap-cta' ),
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

        title: {
            type: 'string',
            default: __( 'Find Top Freelancer and Creatives', 'kenzap-cta' ),
        },

        caption: {
            type: 'string',
            default: __( 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica.', 'kenzap-cta' ),
        },

        link: {
            type: 'string',
            default: __( 'Discover Now', 'kenzap-cta' ),
        },

        categories: {
            type: 'string',
            default: __( 'Category 1, Category 2, Category 3', 'kenzap-cta' ),
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
            default: uo(window.kenzap_cta_path + "images/play-btn.svg"),
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
            default: 1,
        },

        mopacity: {
            type: 'number',
            default: 1,
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-23/preview.jpeg' }` } /> );

        if(props.attributes.isFirstLoad){

            props.setAttributes( { backgroundImage: uo(window.kenzap_cta_path + "images/banner-img-8.jpg"), backgroundImageId:10, backgroundStyle:'cover' } );
            props.setAttributes( { textColor3: '#750179', textColor4:'#d61010', backgroundColor: '#fff', containerPadding: 140 } );
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
                    className={ `kp-bn8 block-${ attributes.blockUniqId }` }
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

                            <div class="kpa">
                                <form action = { attributes.action }>
                                    <div class="swrap" style={ {...getTypography( attributes, 2, "--cl" ),...getTypography( attributes, 2, "--hcl" )} }>
                                    { attributes.categories && <select style={ getTypography( attributes, 2 ) } name="q">
                                
                                        { attributes.categories.split(",").map( ( item, index ) => (
                                            <option value={ encodeURIComponent(item.trim()) }>{ sanitizeAttr(item) }</option>
                                        )) }

                                    </select> }
                                    </div>
                                    <input type="submit" style={ getTypography( attributes, 3 ) } value={ sanitizeAttr(attributes.link) } />
                                </form>
                            </div>
                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
