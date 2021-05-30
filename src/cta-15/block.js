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
        '--textColor': `${ attributes.textColor }`,
        '--textThickness': `${ parseInt(attributes.textThickness) * 100 }`,
        '--titleSize': `${ attributes.titleSize }px`,
    };

    if ( attributes.backgroundColor ) { vars["--backgroundColor"] = attributes.backgroundColor; }

    return {
        vars,
        kenzapContanerStyles,
    };
};

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
registerBlockType( 'kenzap/cta-15', {
    title: __( 'Marqueue Title', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 15', 'kenzap-cta' ),
        __( 'marqueue', 'kenzap-cta' ),
        __( 'Text scrolled animation', 'kenzap-cta' ),
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
            default: __( 'Donec quam felis <strong>pellentesque.</strong>', 'kenzap-cta' ),
        },

        description: {
            type: 'string',
            default: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Libero varius ligula a id nec libero amet non metus ligula risus egestas senectus euismod. Nulla risus aliquam.', 'kenzap-cta' ),
        },

        titleSize: {
            type: 'number',
            default: 180,
        },

        textThickness: {
            type: 'number',
            default: 4,
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

        textColor: {
            type: 'string',
            default: '#333',
        },

        textColor2: {
            type: 'string',
            default: '#007cba',
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-15/preview.jpeg' }` } /> );
        
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

            this.props.setAttributes( { backgroundColor: '#fff' } );
            this.props.setAttributes( { isFirstLoad: false } );
        }

        return (
            <div id={ attributes.anchor } className={ className ? className : '' } style={ vars }>
                <ContainerSave
                    className={ `kpinf13 kp-${ attributes.orientation } block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div class="info-box">
                            <div class="kp-content">

                                <RichText.Content
                                    tagName="p"
                                    className="marquee kp-p"
                                    data-duration="50000"
                                    value={ attributes.title }
                                    />

                            </div>
                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>

                </ContainerSave>
            </div>
        );
    },
} );
