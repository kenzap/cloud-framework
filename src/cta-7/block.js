import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;
import { blockProps, ContainerSave, uo } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
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
        '--textColor0': `${ attributes.textColor0 }`,
        '--textColor': `${ attributes.textColor }`,
        '--textColor2': `${ attributes.textColor2 }`,
        '--textColor22': `${ attributes.textColor22 }`,
        '--textColor3': `${ attributes.textColor3 }`,
        '--textColor4': `${ attributes.textColor4 }`,
        '--ovOpacity': `${ parseInt(attributes.ovOpacity)/100 }`,
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
        'title': __( '- Note', 'kenzap-cta' ),
        'font-size': 12,
        'font-weight': 4,
        'line-height': 12,
        'margin-bottom': 15,
        'letter-spacing': 130,
        'color': '-',
    },
    {
        'title': __( '- Title', 'kenzap-cta' ),
        'font-size': 42,
        'font-weight': 7,
        'line-height': 50,
        'color': '-'
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
registerBlockType( 'kenzap/cta-7', {
    title: __( 'Square Image Banner', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 7', 'kenzap-cta' ),
        __( 'Call to action', 'kenzap-cta' ),
        __( 'Square Banner', 'kenzap-cta' ),
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

        pretitle: {
            type: 'string',
            default: __( 'DO NOT MISS THIS', 'kenzap-cta' ),
        },

        title: {
            type: 'string',
            default: __( 'choco  muffins', 'kenzap-cta' ),
        },

        description: {
            type: 'string',
            default: __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', 'kenzap-cta' ),
        },

        btnTextPre: {
            type: 'string',
            default: __( 'PROFESSIONAL TEAM', 'kenzap-cta' ),
        },

        btnText: {
            type: 'string',
            default: __( 'Get Now $123', 'kenzap-cta' ),
        },

        btnText2Pre: {
            type: 'string',
            default: __( 'ASK AN EXPERT', 'kenzap-cta' ),
        },

        btnText2: {
            type: 'string',
            default: __( 'Get a Quote', 'kenzap-cta' ),
        },

        link: {
            type: 'string',
            default: '#',
        },

        linkNew: {
            type: 'boolean',
            default: false,
        },

        link2: {
            type: 'string',
            default: '#',
        },

        linkNew2: {
            type: 'boolean',
            default: false,
        },

        ctaImage: {
            type: 'string',
            default: (window.kenzap_cta_path + "images/cta-img-8-1.jpg"),
        },
    
        ctaImageId: {
            type: 'string',
            default: '',
        },

        ctaImage2: {
            type: 'string',
            default: (window.kenzap_cta_path + "images/cta-img-8-2.jpg"),
        },
    
        ctaImage2Id: {
            type: 'string',
            default: '',
        },

        textColor0: {
            type: 'string',
            default: '#007cba',
        },

        textColor: {
            type: 'string',
            default: '#333',
        },

        textColor2: {
            type: 'string',
            default: '#fff',
        },

        textColor22: {
            type: 'string',
            default: '#fff',
        },

        textColor3: {
            type: 'string',
            default: '#007cba', //9376df
        },

        textColor4: {
            type: 'string',
            default: '#000000', //9376df
        },

        ovOpacity: {
            type: 'number',
            default: 40, //9376df
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-7/preview.jpeg' }` } /> );

        if(props.attributes.isFirstLoad){

            props.setAttributes( { containerMaxWidth: '2000' } );
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
                    className={ `kpcta8 block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div class="kenzap-row">
                            <div class="kenzap-col-6">
                                <div 
                                    class="kp-content kp-img"
                                    style={ {
                                        backgroundImage: attributes.ctaImage=='none' ? 'none':`url('${ (attributes.ctaImage) }')`
                                    } } >
                                
                                    <a  
                                        className="cta-btn-1"
                                        style={ getTypography( attributes, 1 ) }
                                        target={ attributes.linkNew ? '_blank':'' }
                                        rel="noopener noreferrer"
                                        href={ attributes.link }  >
                                        { attributes.btnTextPre !='' && <span style={ getTypography( attributes, 0 ) }>{ attributes.btnTextPre }</span> }
                                        { attributes.btnText ? attributes.btnText:"" }
                                    </a>

                                </div>
                            </div>
                            <div class="kenzap-col-6">
                                <div 
                                    class="kp-content kp-img"
                                    style={ {
                                        backgroundImage: attributes.ctaImage2=='none' ? 'none':`url('${ (attributes.ctaImage2) }')`
                                    } } >
                                    
                                    <a  
                                        className="cta-btn-2"
                                        style={ getTypography( attributes, 1 ) }
                                        target={ attributes.linkNew2 ? '_blank':'' }
                                        rel="noopener noreferrer"
                                        href={ attributes.link2 }  >
                                        { attributes.btnText2Pre !='' && <span style={ getTypography( attributes, 0 ) }>{ attributes.btnText2Pre }</span> }
                                        { attributes.btnText2 ? attributes.btnText2:"" }
                                    </a>

                                </div>
                            </div>
                        </div>        
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
