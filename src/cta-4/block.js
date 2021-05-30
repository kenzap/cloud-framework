import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave } from '../commonComponents/container/container';
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
        'title': __( '- Title', 'kenzap-cta' ),
        'type': 'title',
        'font-size': 33,
        'font-size-t': 33,
        'font-size-m': 33,
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
        'title': __( '- Button left', 'kenzap-cta' ),
        'type': 'button',
        'line-height': 30,

        'font-weight': 4,
        'font-size': 16,
        'padding-top': 12,
        'padding-right': 48,
        'padding-bottom': 12,
        'padding-left': 48,
        'border-radius': 4,

        'color': '#ffffff',
        'background-color': '#007cba',
        'hover-color': '#007cba',
        'hover-background-color': '#ffffff'
    },
    {
        'title': __( '- Button right', 'kenzap-cta' ),
        'type': 'button',
        'line-height': 30,
        'margin-top': 40,

        'font-weight': 4,
        'font-size': 16,
        'padding-top': 12,
        'padding-right': 48,
        'padding-bottom': 12,
        'padding-left': 48,
        'border-radius': 4,

        'color': '#007cba',
        'background-color': '#ffffff',
        'hover-color': '#ffffff',
        'hover-background-color': '#007cba',
        'hover-border-color': '#ffffff'
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
registerBlockType( 'kenzap/cta-4', {
    title: __( 'Classical Banner', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 4', 'kenzap-cta' ),
        __( 'Call to action two buttons', 'kenzap-cta' ),
        __( 'Classical Banner', 'kenzap-cta' ),
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
            default: __( 'DO NOT MISS THIS CHANCE', 'kenzap-cta' ),
        },

        description: {
            type: 'string',
            default: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Libero varius ligula a id nec libero amet non metus ligula risus egestas senectus euismod.', 'kenzap-cta' ),
        },

        btnText: {
            type: 'string',
            default: __( 'GET NOW $123', 'kenzap-cta' ),
        },

        btnText2: {
            type: 'string',
            default: __( 'GET A QUOTE', 'kenzap-cta' ),
        },

        orientation: {
            type: 'string',
            default: 'kp-cent',
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-4/preview.jpeg' }` } /> );

        if(props.attributes.isFirstLoad){ props.setAttributes( { containerPadding: 140, backgroundColor: '#007cba', isFirstLoad: false} ); }

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
                    className={ `kpcta4 ${ attributes.orientation } block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div 
                            class="kp-content"
                            >

                            { attributes.title &&  <RichText.Content
                                tagName="h2"
                                className="kp-h2"
                                value={ attributes.title }
                                style={ getTypography( attributes, 0 ) }
                            /> }
                            
                            { attributes.description && <RichText.Content
                                    tagName="p"
                                    className="kp-p"
                                    value={ attributes.description }
                                    style={ getTypography( attributes, 1 ) }
                            /> }

                            { attributes.btnText &&  <a 
                                className="cta-btn-1 bt2"
                                style={ getTypography( attributes, 2 ) }
                                rel="noopener noreferrer"
                                target={ attributes.linkNew ? '_blank':'_self' }
                                href={ attributes.link } >{ attributes.btnText } 
                            </a> }
                            
                            { attributes.btnText2 &&  <a 
                                className="cta-btn-2 bt1"
                                style={ getTypography( attributes, 3 ) }
                                rel="noopener noreferrer"
                                target={ attributes.linkNew2 ? '_blank':'_self' }
                                href={ attributes.link2 } >{ attributes.btnText2 } 
                            </a> }

                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
