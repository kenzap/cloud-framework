const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, Popover, TextControl, ToggleControl } = wp.components;
import { defaultItem, getStyles, typographyArr } from './block';
import { InspectorContainer, ContainerEdit } from '../commonComponents/container/container';
import { TypographyContainer, getTypography } from '../commonComponents/typography/typography';
import { Plus } from '../commonComponents/icons/plus';

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
    state = {
        isButtonPopupVisibleIndex: -1,
    };

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
        if ( ! items[ index ] ) {
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
            this.props.setAttributes( {
                items: [ defaultItem ],
            } );
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

        const { vars, kenzapContanerStyles } = getStyles( attributes );

        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-pricing' ) }
                        initialOpen={ false }
                    >
                        <RangeControl
                            label={ __( 'Border radius', 'kenzap-pricing' ) }
                            value={ attributes.cardBorderRadius }
                            onChange={ ( cardBorderRadius ) => setAttributes( { cardBorderRadius } ) }
                            min={ 0 }
                            max={ 130 }
                        />
                    </PanelBody>
                    <PanelColorSettings
                        title={ __( 'Colors', 'kenzap-pricing' ) }
                        initialOpen={ false }
                        colorSettings={ [
                            {
                                value: attributes.textColor,
                                onChange: ( value ) => {
                                    return setAttributes( { textColor: value } );
                                },
                                label: __( 'Icon', 'kenzap-pricing' ),
                            },
                            {
                                value: attributes.cardColor,
                                onChange: ( cardColor ) => {
                                    return setAttributes( { cardColor } );
                                },
                                label: __( 'Table', 'kenzap-pricing' ),
                            },
                            {
                                value: attributes.cardFeaturedColor,
                                onChange: ( cardFeaturedColor ) => {
                                    return setAttributes( { cardFeaturedColor } );
                                },
                                label: __( 'Table featured', 'kenzap-pricing' ),
                            },
                        ] }
                    />
                                        
                    <TypographyContainer
                        setAttributes={ setAttributes }
                        typographyArr={ typographyArr }
                        { ...attributes }
                    />

                    <InspectorContainer
                        setAttributes={ setAttributes }
                        { ...attributes }
                        withPadding
                        withWidth100
                        withBackground
                        withAutoPadding
                        withNested
                    />
                </InspectorControls>
                <div className={ `${ className ? className : '' }` } style={ vars }>
                    <ContainerEdit
                        className={ `kenzap-pricing-2 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                    >
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div className="kp-pricing-table">
                                <div className="kenzap-row">
                                    { attributes.items && attributes.items.map( ( item, index ) => (
                                        <div
                                            key={ item.key }
                                            className="kenzap-col-4"
                                        >
                                            <button className="remove" onClick={ () => this.removeItem( index ) }>
                                                <span className="dashicons dashicons-no" />
                                            </button>
                                            <div
                                                className="pricing-box"
                                                style={ {
                                                    borderRadius: attributes.cardBorderRadius,
                                                    background: ( index + 1 ) % 2 === 0 ? attributes.cardFeaturedColor : attributes.cardColor,
                                                } }
                                            >
                                                <RichText
                                                    tagName="h3"
                                                    placeholder={ __( 'Title', 'kenzap-pricing' ) }
                                                    value={ item.title }
                                                    onChange={ ( value ) => this.onChangePropertyItem( 'title', value, index, true ) }
                                                    style={ getTypography( attributes, 0 ) }

                                                />
                                                <strong
                                                    style={ {
                                                        color: attributes.textColor,
                                                        lineHeight: 1.25,
                                                    } }
                                                    className="kp-price"
                                                >
                                                    <sup>
                                                        <input
                                                            value={ item.currency }
                                                            onChange={ ( event ) => {
                                                                const value = event.target.value;
                                                                this.onChangePropertyItem( 'currency', value, index, true );
                                                            } }
                                                            placeholder={ __( '$', 'kenzap-pricing' ) }
                                                            style={ { ...getTypography( attributes, 1 ), width: `${ ( item.currency.length === 0 ? 1 : item.currency.length ) * 18 }px` } }
                                                        />
                                                    </sup>
                                                    <input
                                                        value={ item.price }
                                                        onChange={ ( event ) => {
                                                            const value = event.target.value;
                                                            this.onChangePropertyItem( 'price', value, index, true );
                                                        } }
                                                        placeholder={ 25 }
                                                        style={ { ...getTypography( attributes, 2 ), width: `${ ( item.price.length === 0 ? 2 : item.price.length ) * 35 }px` } }
                                                    />
                                                </strong>
                                                <RichText
                                                    tagName="ul"
                                                    placeholder={ __( 'Description' ) }
                                                    value={ item.subDescription }
                                                    onChange={ ( value ) => this.onChangePropertyItem( 'subDescription', value, index, true ) }
                                                    multiline="li"
                                                    style={ getTypography( attributes, 3 ) }
                                                />
                                                <a
                                                    onClick={ () => this.setState( { isButtonPopupVisibleIndex: index } ) }
                                                    style={ getTypography( attributes, 4 ) }
                                                    className="kp-link"
                                                    rel="noopener noreferrer"
                                                >
                                                    <input
                                                        value={ item.ctaText }
                                                        onChange={ ( event ) => {
                                                            const value = event.target.value;
                                                            this.onChangePropertyItem( 'ctaText', value, index, true );
                                                        } }
                                                        style={ {
                                                            width: `${ 15 * item.ctaText.length * 0.7 }px`,
                                                        } }
                                                    />
                                                    { this.state.isButtonPopupVisibleIndex === index &&
                                                    <Popover
                                                        onClickOutside={ () => this.setState( { isButtonPopupVisibleIndex: -1 } ) }
                                                        focusOnMount={ false }
                                                        className="link-popover"
                                                    >
                                                        <TextControl
                                                            label={ __( 'Specify Link', 'kenzap-pricing' ) }
                                                            placeholder={ __( 'http://www.example.com' ) }
                                                            value={ item.ctaUrl }
                                                            className="link-text"
                                                            onChange={ ( value ) => {
                                                                this.onChangePropertyItem( 'ctaUrl', value, index, true );
                                                            } }
                                                        />
                                                        <ToggleControl
                                                            label={ __( 'Settings' ) }
                                                            help={ item.ctaUrlTarget ? __( 'Open link in new window.', 'kenzap-pricing' ) : __( 'Open link in current window', 'kenzap-pricing' ) }
                                                            checked={ item.ctaUrlTarget }
                                                            onChange={ ( value ) => {
                                                                this.onChangePropertyItem( 'ctaUrlTarget', value, index, true );
                                                            } }
                                                        />
                                                    </Popover>
                                                    }
                                                </a>
                                            </div>
                                        </div>
                                    ) ) }
                                </div>
                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                        <div className="editPadding" />
                        <button
                            className="addWhite"
                            onClick={ this.addItem }>
                            <span><Plus /></span>{ __( 'Add new table', 'kenzap-pricing' ) }
                        </button>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
