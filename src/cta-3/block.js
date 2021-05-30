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
        '--textColor2': `${ attributes.textColor2 }`,
        '--textThickness': `${ parseInt(attributes.textThickness) * 100 }`,
        '--borderRadius': `${ attributes.borderRadius }px`,
        '--titleSize': `${ attributes.titleSize }px`,
        '--descriptionSize': `${ attributes.descriptionSize }px`,
    };

    if ( attributes.ctaImage != 'none' ) { vars["--ctaImage"] = `url('${ uo(attributes.ctaImage) }')`; }else{ vars["--ctaImage"] = `unset`; }
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
registerBlockType( 'kenzap/cta-3', {
    title: __( 'Framed Banner', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 3', 'kenzap-cta' ),
        __( 'Call to action', 'kenzap-cta' ),
        __( 'Banner', 'kenzap-cta' ),
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
            default: __( 'What are you waiting for?', 'kenzap-cta' ),
        },

        description: {
            type: 'string',
            default: __( 'Let’s start! <a href="#">Right Now!</a>', 'kenzap-cta' ),
        },

        titleSize: {
            type: 'number',
            default: 56,
        },

        descriptionSize: {
            type: 'number',
            default: 12,
        },

        textThickness: {
            type: 'number',
            default: 7,
        },

        borderRadius: {
            type: 'number',
            default: 0,
        },

        ctaImage: {
            type: 'string',
            default: uo(window.kenzap_cta_path + "images/phone-icon.svg"),
        },
    
        ctaImageId: {
            type: 'string',
            default: '',
        },

        textColor: {
            type: 'string',
            default: '#fed841',
        },

        textColor2: {
            type: 'string',
            default: '#eb2f5b',
        },

        items: {
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-3/preview.jpeg' }` } /> );
   
        if(props.attributes.isFirstLoad){

            props.setAttributes( { backgroundColor: '#23282d', containerMaxWidth: '2000' } );
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
                    className={ `kpcta3 block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div 
                            class="kp-content"
                            style={ {
                                outlineColor: attributes.backgroundColor,
                            } } >

                            { attributes.title &&  <RichText.Content
                                tagName="h4"
                                className="kp-h2"
                                value={ attributes.title }
                            /> }
                            
                            { attributes.description && <RichText.Content
                                    tagName="p"
                                    className="kp-cta"
                                    value={ attributes.description }
                            /> }

                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
