const { __ } = wp.i18n;
const { Component } = wp.element;
const { MediaUpload, RichText, InspectorControls, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody } = wp.components;
import { ContainerEdit, InspectorContainer } from '../commonComponents/container/container';
import { defaultItem, typographyArr, getStyles } from './block';
import { TypographyContainer, getTypography } from '../commonComponents/typography/typography';

/**
 * Keys for new blocks
 * @type {number}
 */
let key = 0;

/**
 * The edit function describes the structure of your block in the context of the editor.
 * This represents what the editor will render when the block is used.
 *
 * The "edit" property must be a valid function.
 * @param {Object} props - attributes
 * @returns {Node} rendered component
 */
export default class Edit extends Component {
    /**
     * Add a new item to list with default fields
     */
    addItem = () => {
        key++;
        this.props.setAttributes( {
            items: [ ...this.props.attributes.items, {
                ...defaultItem,
                title: defaultItem.title + ' ' + ( key ),
                key: 'new ' + new Date().getTime(),
            } ],
        } );
    };

    /**
     * Change any property of item
     * @param {string} property - editable field
     * @param {string} value - for field
     * @param {number} index - of items array
     * @param {boolean} withMutation - in some cases we should avoid mutation for force rerender component
     */
    onChangePropertyItem = ( property, value, index, withMutation = false ) => {
        const items = withMutation ? [ ...this.props.attributes.items ] : this.props.attributes.items;
        if ( ! items[ index ] || typeof items[ index ][ property ] !== 'string' ) {
            return;
        }
        items[ index ][ property ] = value;
        this.props.setAttributes( { items: items } );
    };

    /**
     * Remove item
     * It also add default item if we remove all elements from array
     * @param {number} index - of item
     */
    removeItem = ( index ) => {
        const items = [ ...this.props.attributes.items ];
        if ( items.length === 1 ) {
            this.props.setAttributes( { items: [ defaultItem ] } );
        } else {
            items.splice( index, 1 );
            this.props.setAttributes( { items: items } );
        }
    };


    render() {
        const {
            className,
            attributes,
            setAttributes,
            isSelected,
        } = this.props;

        const {
            vars,
            kenzapContanerStyles,
            additionalClassForKenzapContainer,
        } = getStyles( attributes );

        const changeImage = (index) => {

            <MediaUpload
                onSelect={ ( media ) => {
                        this.onChangePropertyItem( 'iconMediaId', media.id, index );
                        this.onChangePropertyItem( 'iconMediaUrl', media.url, index, true );
                    } }
                value={ attributes.items[index].iconMediaId }
                render={ ( props ) => (
                    <img
                        src={ (attributes.items[index].iconMediaUrl) }
                        alt={ attributes.items[index].title.replace( /<(?:.|\n)*?>/gm, '' ) }
                        style={ {
                                cursor: 'pointer',
                                position: 'relative',
                                zIndex: 10,
                            } }
                        onClick={ props.open }
                        role="presentation"
                        />
                    ) }
                />
        }

        const getIcon = (cl, index) => {
            return(
                <div className={ cl }>
                    <span 
                        className="kp-icon" 
                        style={ {width: attributes.iconSize, height: attributes.iconSize } }
                        >

                        <MediaUpload
                            onSelect={ ( media ) => {
                                    this.onChangePropertyItem( 'iconMediaId', media.id, index );
                                    this.onChangePropertyItem( 'iconMediaUrl', media.url, index, true );
                                    //this.onChangePropertyItem( 'alt', media.alt, index, true );
                                    //console.log(media);
                                } }
                            value={ attributes.items[index].iconMediaId }
                            render={ ( props ) => (
                                <img 
                                    src={ attributes.items[index].iconMediaUrl }
                                    style={ {
                                        cursor: 'pointer',
                                        position: 'relative',
                                        zIndex: 10,
                                    } }
                                    onClick={ props.open }
                                    role="presentation"
                                    alt={ attributes.items[index].title.replace( /<(?:.|\n)*?>/gm, '' ) } />
                            ) }
                        />

                    </span>

                    <RichText
                        tagName="h3"
                        placeholder={ __( 'Title', 'kenzap-features' ) }
                        value={ attributes.items[index].title }
                        onChange={ ( value ) => this.onChangePropertyItem( 'title', value, index, true ) }
                        style={ getTypography( attributes, 0 ) }
                        />

                    <RichText
                        tagName="p"
                        placeholder={ __( 'Description', 'kenzap-features' ) }
                        value={ attributes.items[index].description }
                        onChange={ ( value ) => this.onChangePropertyItem( 'description', value, index, true ) }
                        style={ getTypography( attributes, 1 ) }
                        />
                </div>
            );
        };

        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-features' ) }
                        initialOpen={ false }
                    >
                        <RangeControl
                            label={ __( 'Icons size', 'kenzap-features' ) }
                            value={ attributes.iconSize }
                            onChange={ ( iconSize ) => setAttributes( { iconSize } ) }
                            min={ 30 }
                            max={ 140 }
                        />
                        
                    </PanelBody>

                    <TypographyContainer
                        setAttributes={ setAttributes }
                        typographyArr={ typographyArr }
                        { ...attributes }
                    />

                    <InspectorContainer
                        setAttributes={ setAttributes }
                        { ...attributes }
                        withNested
                        withPadding
                        withWidth100
                        withBackground
                    />
                </InspectorControls>

                <div className={ `kenzap ${ className ? className : '' }` }>
                    <ContainerEdit
                        className={ `kpi3 ${ isSelected ? 'selected' : '' } ` }
                        style={ { ...vars } }
                        attributes={ attributes }
                        withBackground
                        withPadding
                    >
                        <div className={ `kenzap-container ${ additionalClassForKenzapContainer }` } style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div className="kp-row">
                                <div className="kp-col-3">
                                    
                                    { getIcon("kp-box align-right", 0) }

                                    { getIcon("kp-box align-right", 1) }

                                </div>
                                <div class="kp-col-6">
                                    <MediaUpload
                                        onSelect={ ( media ) => {
                                                this.onChangePropertyItem( 'iconMediaId', media.id, 4 );
                                                this.onChangePropertyItem( 'iconMediaUrl', media.url, 4, true );
                                            } }
                                        value={ attributes.items[4].iconMediaId }
                                        render={ ( props ) => (
                                            <img 
                                                src={ attributes.items[4].iconMediaUrl }
                                                style={ {
                                                    //...featuredImg,
                                                    cursor: 'pointer',
                                                    position: 'relative',
                                                    zIndex: 10,
                                                } }
                                                onClick={ props.open }
                                                role="presentation"
                                                alt={ attributes.items[4].title.replace( /<(?:.|\n)*?>/gm, '' ) } />
                                        ) }
                                    />
                                </div>
                                <div class="kp-col-3">

                                    { getIcon("kp-box", 2) }

                                    { getIcon("kp-box", 3) }

                                </div>
                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>

                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
