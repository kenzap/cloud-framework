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
        showError: false,
    };

    timerId = 0;

    /**
     * Add a new item to list with default fields
     */
    addItem = () => {
        clearTimeout( this.timerId );
        if ( this.props.attributes.items.length >= 3 ) {
            this.setState( { showError: true } );
            this.timerId = setTimeout( () => {
                this.setState( { showError: false } );
                clearTimeout( this.timerId );
            }, 3000 );
        } else {
            key++;
            this.props.setAttributes( {
                items: [ ...this.props.attributes.items, {
                    ...defaultItem,
                    title: defaultItem.title + ' ' + ( key ),
                    key: 'new ' + new Date().getTime(),
                } ],
            } );
        }
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
                items: [ {
                    ...defaultItem,

                } ],
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
                            label={ __( 'Featured Table', 'kenzap-pricing' ) }
                            value={ attributes.bestSellerBlock }
                            onChange={ ( bestSellerBlock ) => setAttributes( { bestSellerBlock } ) }
                            min={ 1 }
                            max={ attributes.items.length }
                        />

                        <RangeControl
                            label={ __( 'Table Border', 'kenzap-pricing' ) }
                            value={ attributes.cardBorderRadius }
                            onChange={ ( cardBorderRadius ) => setAttributes( { cardBorderRadius } ) }
                            min={ 0 }
                            max={ 100 }
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
                                label: __( 'Divider', 'kenzap-pricing' ),
                            },
                            {
                                value: attributes.tableColor,
                                onChange: ( tableColor ) => {
                                    return setAttributes( { tableColor } );
                                },
                                label: __( 'Table', 'kenzap-pricing' ),
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
                <div className={ className ? className : '' } style={ vars }>
                    <ContainerEdit
                        className={ `kenzap-pricing-6 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
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
                                                className={ `pricing-box ${ attributes.bestSellerBlock === index + 1 ? 'best-seller' : '' }` }
                                                style={ {
                                                    borderRadius: attributes.cardBorderRadius,
                                                    background: attributes.tableColor,
                                                } }
                                            >
                                                { (attributes.bestSellerBlock === index + 1) && <RichText
                                                    tagName="span"
                                                    className="ribbon"
                                                    placeholder={ __( 'Featured', 'kenzap-pricing' ) }
                                                    value={ attributes.bestSellerBlockText }
                                                    onChange={ ( bestSellerBlockText ) => setAttributes( { bestSellerBlockText } ) }
                                                    style={ getTypography( attributes, 5 ) }
                                                /> }

                                                <RichText
                                                    tagName="h3"
                                                    placeholder={ __( 'Title', 'kenzap-pricing' ) }
                                                    value={ item.title }
                                                    onChange={ ( value ) => this.onChangePropertyItem( 'title', value, index, true ) }
                                                    style={ getTypography( attributes, 0 ) }
                                                />
                                                <strong
                                                    className="kp-price"
                                                    style={ {
                                                        //color: attributes.textColor,
                                                        lineHeight: 1.25,
                                                    } }
                                                >
                                                    <sup>
                                                        <input
                                                            value={ item.currency }
                                                            onChange={ ( event ) => {
                                                                const value = event.target.value;
                                                                this.onChangePropertyItem( 'currency', value, index, true );
                                                            } }
                                                            placeholder={ __( '$', 'kenzap-pricing' ) }
                                                            style={ { ...getTypography( attributes, 1 ), width: `${ ( item.currency.length === 0 ? 1 : item.currency.length ) * 13 }px`}  }
                                                        />
                                                    </sup>
                                                    <input
                                                        value={ item.price }
                                                        onChange={ ( event ) => {
                                                            const value = event.target.value;
                                                            this.onChangePropertyItem( 'price', value, index, true );
                                                        } }
                                                        placeholder={ 5 }
                                                        style={ { ...getTypography( attributes, 2 ), width: `${ ( item.price.length === 0 ? 1 : item.price.length ) * 47 }px` } }
                                                    />
                                                </strong>
                                                <ul>
                                                    { item.subItems.map( ( subItem, subItemindex ) => (
                                                        <li
                                                            key={ subItem.key }
                                                            style={ getTypography( attributes, 3 ) }
                                                        >
                                                            <button className="remove" onClick={ () => {
                                                                const subItems = item.subItems;
                                                                const items = [ ...attributes.items ];
                                                                subItems.splice( subItemindex, 1 );
                                                                items[ index ].subItems = subItems;
                                                                this.props.setAttributes( { items } );
                                                            } }>
                                                                <span className="dashicons dashicons-no" />
                                                            </button>
                                                            <input
                                                                value={ subItem.option }
                                                                onChange={ ( event ) => {
                                                                    const value = event.target.value;
                                                                    const subItems = item.subItems;
                                                                    subItems[ subItemindex ].option = value;
                                                                    this.onChangePropertyItem( 'subItems', subItems, index, true );
                                                                } }
                                                                placeholder={ __( 'Dolor', 'kenzap-pricing' ) }
                                                                style={ { ...getTypography( attributes, 3, 'font-size' ), ...getTypography( attributes, 3, 'color' ), ...{
                                                                    width: `${ ( subItem.option.length === 0 ? 5 : subItem.option.length ) * 13 }px`,
                                                                    //color: attributes.textColor,
                                                                } } }
                                                            />

                                                            <strong>
                                                                <input
                                                                    value={ subItem.availability }
                                                                    onChange={ ( event ) => {
                                                                        const value = event.target.value;
                                                                        const subItems = item.subItems;
                                                                        subItems[ subItemindex ].availability = value;
                                                                        this.onChangePropertyItem( 'subItems', subItems, index, true );
                                                                    } }
                                                                    placeholder={ __( 'Yes', 'kenzap-pricing' ) }
                                                                    style={ { ...getTypography( attributes, 3, 'font-size' ), ...getTypography( attributes, 3, 'color' ), ...{
                                                                        width: `${ ( subItem.availability.length === 0 ? 4 : subItem.availability.length === 2 ? subItem.availability.length + 2 : subItem.availability.length + 1 ) * 12 }px`,
                                                                        //color: attributes.textColor,
                                                                    } } }
                                                                />
                                                            </strong>
                                                        </li>
                                                    ) ) }
                                                    <li>
                                                        <button
                                                            onClick={ () => {
                                                                const subItems = item.subItems;
                                                                const items = [ ...attributes.items ];
                                                                items[ index ].subItems = [
                                                                    ...subItems,
                                                                    { option: __( 'New option', 'kenzap-pricing' ), availability: __( 'No', 'kenzap-pricing' ), key: new Date().getTime() } ];
                                                                this.props.setAttributes( { items } );
                                                            } }
                                                        ><Plus /><span style={ { display: 'block', marginLeft: '5px' } }>{ __( 'Add new option', 'kenzap-pricing' ) }</span></button>
                                                    </li>
                                                </ul>

                                                <a
                                                    className="kp-link"
                                                    onClick={ () => this.setState( { isButtonPopupVisibleIndex: index } ) }
                                                    style={ getTypography( attributes, 4 ) }
                                                    rel="noopener noreferrer"
                                                >
                                                    <input
                                                        value={ item.buttonText }
                                                        onChange={ ( event ) => {
                                                            const value = event.target.value;
                                                            this.onChangePropertyItem( 'buttonText', value, index, true );
                                                        } }
                                                        style={ {
                                                            width: `${ item.buttonText.length * 9 }px`,
                                                            //color: attributes.buttonTextColor,
                                                        } }
                                                    />
                                                </a>

                                                { this.state.isButtonPopupVisibleIndex === index &&
                                                <Popover
                                                    onClickOutside={ () => this.setState( { isButtonPopupVisibleIndex: -1 } ) }
                                                    focusOnMount={ false }
                                                    className="link-popover"
                                                >
                                                    <TextControl
                                                        label={ __( 'Specify Link', 'kenzap-pricing' ) }
                                                        placeholder={ __( 'http://www.example.com' ) }
                                                        value={ item.buttonUrl }
                                                        className="link-text"
                                                        onChange={ ( value ) => {
                                                            this.onChangePropertyItem( 'buttonUrl', value, index, true );
                                                        } }
                                                    />
                                                    <ToggleControl
                                                        label={ __( 'Settings' ) }
                                                        help={ item.buttonUrlTarget ? __( 'Open link in new window.', 'kenzap-pricing' ) : __( 'Open link in current window', 'kenzap-pricing' ) }
                                                        checked={ item.buttonUrlTarget }
                                                        onChange={ ( value ) => {
                                                            this.onChangePropertyItem( 'buttonUrlTarget', value, index, true );
                                                        } }
                                                    />
                                                </Popover>
                                                }
                                            </div>
                                        </div>
                                    ) ) }
                                </div>
                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                        { this.state.showError && <div className={ 'errorMessage errorShow' }>
                            { __( 'No more than 3 pricing tables are allowed per block.', 'kenzap-steps' ) }
                        </div>
                        }
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
