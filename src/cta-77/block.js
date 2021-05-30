import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;
import { blockProps, ContainerSave } from '../commonComponents/container/container';
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
        '--textColor2': `${ attributes.textColor2 }`,
        '--iconlSize': `${ attributes.iconlSize }px`,
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
registerBlockType( 'kenzap/cta-77', {
    title: __( 'Responsive Spacer', 'kenzap-plugin' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 77', 'kenzap-plugin' ),
        __( 'spacer', 'kenzap-plugin' ),
        __( 'separator divider', 'kenzap-plugin' ),
    ],
    anchor: true,
    html: true,
    supports: {
        align: [ 'full', 'wide' ],
    },
    attributes: {
        ...blockProps,

        align: {
            type: 'string',
            default: 'full',
        },

        responsive: {
            type: 'boolean',
            default: false,
        },

        iconlSize: {
            type: 'number',
            default: 12,
        },

        divSize: {
            type: 'number',
            default: 1,
        },

        textColor2: {
            type: 'string',
        },

        isFirstLoad: {
            type: 'boolean',
            default: true,
        },

        blockUniqId: {
            type: 'number',
            default: 0,
        },

        randomValue: {
            type: 'string'
        }
    },

    edit: ( props ) => {
        
        if(props.attributes.isFirstLoad){ props.setAttributes( { isFirstLoad: false, textColor2: '#ff6600', backgroundColor: '#666666', containerPadding: 0 } ); }

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

        const cStyles = { ...vars, 'max-width':(attributes.width100 ? "none":`${ attributes.containerMaxWidth }px`), '--maxWidth':`${ attributes.containerMaxWidth }px` }
        if(attributes.align!='full' && attributes.align!='wide'){
            cStyles['margin'] = 'auto';
        }else{
            cStyles['max-width'] = 'none';
        }

        return (
            <div className={ className ? className : '' } style={ {...cStyles, '--height':`${ attributes.divSize }`} } >
                <ContainerSave
                    className={ `kp-div-1 block-${ attributes.blockUniqId } ${ (attributes.responsive)?"autoPadding":"" }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
              
                        <div class="kp-content" style={{ "height":`${ (attributes.responsive)?"1":attributes.divSize }px` }} >
                            &nbsp;
                        </div>
                        
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>

                </ContainerSave>
            </div>
        );
    },
} );
