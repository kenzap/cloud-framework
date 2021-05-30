import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave, uo } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import { hexToRGB } from '../commonComponents/helpers/helpers';
import Edit from './edit';


/**
 * Provides the initial data for new block
 */
export const defaultItem = {
    title: __( 'How can I use Kenzap Cloud?', 'kenzap-cta' ),
    description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Libero varius ligula a id nec libero amet non metus ligula risus egestas senectus euismod. Nulla risus aliquam.', 'kenzap-cta' ),
    img1: (window.kenzap_cta_path + "images/info-img-1.jpg"),
};

export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( '1. <strong>Cloud Services</strong>', 'kenzap-cta' ),
        description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Libero varius ligula a id nec libero amet non metus ligula risus egestas senectus euismod. Nulla risus aliquam.', 'kenzap-cta' ),
        key: new Date().getTime() + 1,
    }, {
        title: __( '2. <strong>Free Website Templates</strong>', 'kenzap-cta' ),
        description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Libero varius ligula a id nec libero amet non metus ligula risus egestas senectus euismod. Nulla risus aliquam.', 'kenzap-cta' ),
        key: new Date().getTime() + 2,
    }, {
        title: __( '3. <strong>Latest Technologies</strong>', 'kenzap-cta' ),
        description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Libero varius ligula a id nec libero amet non metus ligula risus egestas senectus euismod. Nulla risus aliquam.', 'kenzap-cta' ),
        key: new Date().getTime() + 2,
    }, {
        title: __( '4. <strong>Awesome Design</strong>', 'kenzap-cta' ),
        description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Libero varius ligula a id nec libero amet non metus ligula risus egestas senectus euismod. Nulla risus aliquam.', 'kenzap-cta' ),
        key: new Date().getTime() + 2,
    }
] );

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
        '--textColor3': `${ hexToRGB(attributes.textColor3, attributes.borderTrans/100) }`,
        '--textColor4': `${ hexToRGB(attributes.textColor4, 0.95) }`,
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
        'font-size': 34,
        'font-weight': 4,
        'line-height': 38,
        'margin-bottom': 20,
        'color': '-',
    },
    {
        'title': __( '- Question', 'kenzap-cta' ),
        'font-size': 17,
        'font-weight': 4,
        'line-height': 30,
        'margin-bottom': 0,
        'color': '-'
    },
    {
        'title': __( '- Answer', 'kenzap-cta' ),
        'font-size': 14,
        'font-weight': 4,
        'line-height': 22,
        'margin-bottom': 15,
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
registerBlockType( 'kenzap/cta-12', {
    title: __( 'Banner FAQ', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 12', 'kenzap-cta' ),
        __( 'Question and answer', 'kenzap-cta' ),
        __( 'banner accordion', 'kenzap-cta' ),
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

        orientation: {
            type: 'string',
            default: 'right',
        },

        elements: {
            type: 'number',
            default: 4,
        },

        title: {
            type: 'title',
            default: 'Incredible design <br><strong>inspired by Kenzap</strong>',
        },

        titleSize: {
            type: 'number',
            default: 34,
        },

        descriptionSize: {
            type: 'number',
            default: 14,
        },

        textThickness: {
            type: 'number',
            default: 4,
        },

        borderTrans: {
            type: 'number',
            default: 30,
        },

        openFirst: {
            type: 'boolean',
            default: true,
        },

        img1: {
            type: 'string',
            default: (window.kenzap_cta_path + "images/cta-img-1.jpg"),
        },

        alt1: {
            type: 'string',
            default: 'image',
        },

        textColor: {
            type: 'string',
            default: '#23282d',
        },

        textColor2: {
            type: 'string',
            default: '#007cba',
        },

        textColor3: {
            type: 'string',
            default: '#23282d',
        },

        textColor4: {
            type: 'string',
            default: '#ffffff',
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-12/preview.jpeg' }` } /> );
        
        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                isFirstLoad: false,
            } );
     
            props.attributes.items = JSON.parse( defaultSubBlocks );
            if ( ! props.attributes.blockUniqId ) {
                props.setAttributes( {
                    blockUniqId: new Date().getTime(),
                } );
            }
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
                    className={ `kpinf1 kp-${ attributes.orientation } block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div class="info-box">
                            <div class="kp-img" style={ { backgroundImage: 'url('+(attributes.img1)+')' } } ></div>
                            <div class="kp-content">
                                <RichText.Content
                                    tagName="h2"
                                    className="kp-h2"
                                    value={ attributes.title }
                                    style={ getTypography( attributes, 0 ) }
                                    />

                                <ul class="accordion">

                                    { attributes.items && attributes.items.map( ( item, index ) => (
                                        
                                        <li>
                                            <a className={ `toggle ${ attributes.openFirst && index==0 ? 'active': '' }` } href="#">
                                            
                                            <RichText.Content
                                                tagName="span"
                                                className="kp-sp"
                                                value={ item.title }
                                                style={ getTypography( attributes, 1 ) }
                                                />

                                            <i class="plus"></i></a>
                                            <div className={ `inner ${ attributes.openFirst && index==0 ? 'show': '' }` } 
                                                style={ { display: attributes.openFirst && index==0 ? 'block': 'none' } }>
                                                <RichText.Content
                                                    tagName="p"
                                                    className="kp-p"
                                                    value={ item.description }
                                                    style={ getTypography( attributes, 2 ) }
                                                    />

                                            </div>
                                        </li>
                                        
                                    ) ) }
                                </ul>
                            </div>
                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
