import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave, uo } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import Edit from './edit';
let isScriptLoad = false;

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
    if ( attributes.textColor2 ) { vars["--textColor2"] = attributes.textColor2; }
    
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
        'font-size': 36,
        'font-weight': 4,
        'line-height': 43,
        'margin-top': 15,
        'margin-bottom': 10,
        'color': '#23282d',
    },
    {
        'title': __( '- Description', 'kenzap-cta' ),
        'font-size': 16,
        'font-weight': 4,
        'line-height': 28,
        'margin-bottom': 20,
        'color': '#23282d'
    },
    {
        'title': __( '- CTA', 'kenzap-cta' ),
        'font-size': 16,
        'font-weight': 4,
        'line-height': 28,
        'margin-bottom': 20,
        'color': '#007cba'
    },
    {
        'title': __( '- Caption', 'kenzap-cta' ),
        'font-size': 16,
        'font-weight': 4,
        'line-height': 28,
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
registerBlockType( 'kenzap/cta-14', {
    title: __( 'Before After Banner', 'kenzap-cta' ),
    description: __( 'Note. Save block and refresh this page to preview changes.', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 14', 'kenzap-cta' ),
        __( 'compare images', 'kenzap-cta' ),
        __( 'banner', 'kenzap-cta' ),
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
            default: 'wide',
        },
        
        orientation: {
            type: 'string',
            default: 'right',
        },

        title: {
            type: 'string',
            default: __( 'Before <br><strong>And After</strong>', 'kenzap-cta' ),
        },

        description: {
            type: 'string',
            default: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Libero varius ligula a id nec libero amet non metus ligula risus egestas senectus euismod. Nulla risus aliquam.', 'kenzap-cta' ),
        },

        txtAfter: {
            type: 'string',
            default: __( 'After', 'kenzap-cta' ),
        },

        txtBefore: {
            type: 'string',
            default: __( 'Before', 'kenzap-cta' ),
        },

        btnText: {
            type: 'string',
            default: __( 'Learn More', 'kenzap-cta' ),
        },

        link: {
            type: 'string',
            default: '#',
        },

        linkNew: {
            type: 'boolean',
            default: false,
        },

        openFirst: {
            type: 'boolean',
            default: true,
        },

        img1: {
            type: 'string',
            default: uo(window.kenzap_cta_path + "images/cta-img-1bf.jpg"),
        },

        alt1: {
            type: 'string',
            default: 'image',
        },

        img2: {
            type: 'string',
            default: uo(window.kenzap_cta_path + "images/cta-img-1.jpg"),
        },

        alt2: {
            type: 'string',
            default: 'image',
        },

        textColor2: {
            type: 'string',
            //default: '#23282d',
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-14/preview.jpeg' }` } /> );
        
        if(!isScriptLoad){

            setTimeout(function(){
                
                // jQuery.getScript( window.kenzap_cta_path + 'bafter/before-after.min.js', function( data, textStatus, jqxhr ) {
                //     jQuery.getScript( window.kenzap_cta_path + 'bafter/before-after.min.css', function( data, textStatus, jqxhr ) {
                        
                //     });
                //     jQuery.getScript( window.kenzap_cta_path + 'cta-14/editor.script.js', function( data, textStatus, jqxhr ) { ( function( $ ) { beforeAfter($); }); }( jQuery ) );
                // });
                  
                isScriptLoad = true;
            },500);
        }

        // if (typeof beforeAfter === 'function') { beforeAfter($); }

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
        
        if(props.attributes.isFirstLoad){

            this.props.setAttributes( { backgroundColor: '#fff', textColor2:'#23282d' } );
            this.props.setAttributes( { isFirstLoad: false } );
        }

        const getImage = () => {
            return(
                <div class="kenzap-col-6">
                    <div class="kp-img">
                        <div class="ba-slider">
                        <img src={ uo(attributes.img1) } />
                        <div class="resize">
                            <img src={ uo(attributes.img2) } />
                            <RichText.Content
                                tagName="span"
                                className="after-txt"
                                value={ attributes.txtAfter }
                                style={ getTypography( attributes, 3 ) }
                                />
                        </div>
                        <span class="handle"></span>
                        <RichText.Content
                            tagName="span"
                            className="before-txt"
                            value={ attributes.txtBefore }
                            style={ getTypography( attributes, 3 ) }
                            />
                        </div>
                    </div>
                </div>
            );
        };

        return (
            <div id={ attributes.anchor } className={ className ? className : '' } style={ vars }>
                <ContainerSave
                    className={ `kpinf9 kp-${ attributes.orientation } block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div class="kenzap-row">

                            <div class="info-box">

                                { attributes.orientation == 'left' && getImage() }

                                <div class="kenzap-col-6">
                                    <div class="kp-content">

                                        <RichText.Content
                                            tagName="h2"
                                            className="kp-h2"
                                            value={ attributes.title }
                                            style={ getTypography( attributes, 0 ) }
                                            />

                                        <RichText.Content
                                            tagName="p"
                                            className="kp-p"
                                            value={ attributes.description }
                                            style={ getTypography( attributes, 1 ) }
                                            />
                                        <a  
                                            target={ attributes.linkNew ? '_blank':'_self' }
                                            style={ getTypography( attributes, 2 ) }
                                            rel="noopener noreferrer"
                                            href={ attributes.link }  >
                                            { attributes.btnText ? attributes.btnText:"" }
                                        </a>

                                    </div>
                                </div>

                                { attributes.orientation == 'right' && getImage() }

                            </div>

                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>

                </ContainerSave>
            </div>
        );
    },
} );
