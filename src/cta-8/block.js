import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
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
        'font-size': 14,
        'font-weight': 4,
        'line-height': 20,
        'margin-bottom': 30,
        'color': '#ffffff',
        'letter-spacing': 130
    },
    {
        'title': __( '- Title', 'kenzap-cta' ),
        'type': 'title',
        'font-size': 54,
        'font-size-t': 30,
        'font-size-m': 24,
        'font-weight': 5,
        'line-height': 60,
        'margin-bottom': 25,
        'color': '#ffffff'
    },
    {
        'title': __( '- Description', 'kenzap-cta' ),
        'font-size': 19,
        'font-weight': 4,
        'line-height': 30,
        'margin-bottom': 20,
        'color': '#ffffff'
    },
    {
        'title': __( '- Info', 'kenzap-cta' ),
        'font-size': 14,
        'font-weight': 4,
        'line-height': 14,
        'margin-top': 15,
        'color': '#ffffff',
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
registerBlockType( 'kenzap/cta-8', {
    title: __( 'App Banner V1', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 8', 'kenzap-cta' ),
        __( 'Call to action', 'kenzap-cta' ),
        __( 'mobile application banner', 'kenzap-cta' ),
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
            default: __( '#Kenzap_web best_design', 'kenzap-cta' ),
        },

        description: {
            type: 'string',
            default: __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', 'kenzap-cta' ),
        },

        aftertitle: {
            type: 'string',
            default: __( '<em>* Optimized for Android & iOS</em>', 'kenzap-cta' ),
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
            default: 'https://www.apple.com/lae/ios/app-store/',
        },

        linkNew: {
            type: 'boolean',
            default: false,
        },

        link2: {
            type: 'string',
            default: 'https://play.google.com/store/apps/details?id=com.kenzap.notes',
        },

        linkNew2: {
            type: 'boolean',
            default: false,
        },

        ctaImage: {
            type: 'string',
            default: uo(window.kenzap_cta_path + "images/appstore.png"),
        },
    
        ctaImageId: {
            type: 'string',
            default: '',
        },

        ctaImage2: {
            type: 'string',
            default: uo(window.kenzap_cta_path + "images/googleplay.png"),
        },
    
        ctaImage2Id: {
            type: 'string',
            default: '',
        },

        phoneImage: {
            type: 'string',
            default: uo(window.kenzap_cta_path + "images/cta-phone-9.png"), 
        },
    
        phoneImageId: {
            type: 'string',
            default: '',
        },

        textColor: {
            type: 'string',
            default: '#fff',
        },

        topOffset: {
            type: 'number',
            default: 0,
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-8/preview.jpeg' }` } /> );

        if(props.attributes.isFirstLoad){ props.setAttributes( { containerPadding: 40, isFirstLoad: false, containerMaxWidth: '1200'} ); }

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
                    className={ `kpcta9 ${ attributes.topOffset > 0 ? 'topOffset': '' } block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div class="kenzap-row">
                            <div class="kenzap-col-6">
                                <div class="kp-content">
                                    { attributes.pretitle &&  <RichText.Content
                                        tagName="span"
                                        className="kp-sp"
                                        value={ attributes.pretitle }
                                        style={ getTypography( attributes, 0 ) }
                                    /> }

                                    { attributes.title &&  <RichText.Content
                                        tagName="h2"
                                        className="kp-h2"
                                        value={ attributes.title }
                                        style={ getTypography( attributes, 1 ) }
                                    /> }

                                    { attributes.description &&  <RichText.Content
                                        tagName="p"
                                        className="kp-p"
                                        value={ attributes.description }
                                        style={ getTypography( attributes, 2 ) }
                                    /> }

                                    <ul>
                                        { attributes.ctaImage != 'none' && <li>
                                            <a 
                                                href={ attributes.link }
                                                rel="noopener noreferrer"
                                                target={ attributes.linkNew ? '_blank':'' }
                                                >
                                                <img src={ uo(attributes.ctaImage) } alt={ __( 'App Store Icon', 'kenzap-cta' ) }/>
                                            </a>
                                        </li> }
                                        { attributes.ctaImage2 != 'none' && <li>
                                            <a 
                                                href={ attributes.link2 }
                                                rel="noopener noreferrer"
                                                target={ attributes.linkNew2 ? '_blank':'' }
                                                >
                                                <img src={ uo(attributes.ctaImage2) } alt={ __( 'App Store Icon', 'kenzap-cta' ) }/>
                                            </a>
                                        </li> }
                                    </ul>

                                    { attributes.aftertitle &&  <RichText.Content
                                        tagName="p"
                                        className="kp-em"
                                        value={ attributes.aftertitle }
                                        style={ getTypography( attributes, 3 ) }
                                    /> }

                                </div>
                            </div>
                            <div class="kenzap-col-6">
                                <div class="kp-img">
                                    { attributes.phoneImage != 'none' && <img 
                                    src={ uo(attributes.phoneImage) } alt={ attributes.title }
                                    /> }
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
