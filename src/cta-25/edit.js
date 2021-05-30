const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, InnerBlocks, MediaUpload } = wp.editor;
const { RangeControl, PanelBody, TextControl, Popover, ToggleControl, Button, RadioControl } = wp.components;
import { getStyles, defaultItems, typographyArr, onTabClick } from './block';
import { InspectorContainer, ContainerEdit } from '../commonComponents/container/container';
import { TypographyContainer, getTypography } from '../commonComponents/typography/typography';

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
        popupVisibleIndex: -1,
        activeFilter: '',
    };

    getTabContent = (attributes, i) => {

        return (<div class="kp-content">

            { attributes.items && attributes.items.map( ( item, index ) => (

            <div id={ `content-${ index }` } class="tab-content" style={ { display: (`${ index == 0 ? 'block':'none' }`) } }>
                <div class="kenzap-row">

                    { item.layout == 'left' ?
                    <div class="kenzap-col-6">
                        <img src={ item.img } alt="image" onClick={ () => { this.setState( { popupVisibleIndex: index } ); } } />
                    </div> 
                    : null }

                    <div class="kenzap-col-6" >
                        <RichText
                            tagName="h2"
                            className="kph"
                            value={ item.title }
                            placeholder={ __( 'Title', 'kenzap-cta' ) }
                            onChange={ ( value ) => {
                                 this.onChangePropertyItem( 'title', value, index, true ); //setAttributes( { title: title } ) 
                            } }
                            style={ getTypography( attributes, 1 ) }
                        />

                        <RichText
                            tagName="p"
                            className="kpp"
                            value={ item.text }
                            placeholder={ __( 'Text', 'kenzap-cta' ) }
                            onChange={ ( value ) => {
                                 this.onChangePropertyItem( 'text', value, index, true ); //setAttributes( { title: title } ) 
                            } }
                            style={ getTypography( attributes, 2 ) }
                        />

                        <a class="read-more" href="#" style={ getTypography( attributes, 3 ) } onClick={ () => { this.setState( { popupVisibleIndex: index } ); } }>{ item.btn }</a>
                        
                    </div>

                    { item.layout == 'right' ?
                    <div class="kenzap-col-6">
                        <img src={ item.img } alt="image" onClick={ () => { this.setState( { popupVisibleIndex: index } ); } } />
                    </div>
                    : null }

                </div>

                { this.state.popupVisibleIndex === index &&
                <Popover
                    focusOnMount={ false }
                    className="kenzap-links-1-popover"
                >
                    <span
                        onClick={ () => this.setState( { popupVisibleIndex: -1 } ) }
                        style={ {
                            lineHeight: 1,
                            cursor: 'pointer',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                        } }
                        className="dashicons dashicons-no"
                    />
                    <div class="kp-pc">
                        <div style={ { marginBottom: '5px' } }>
                            <TextControl
                                label={ __( 'Text', 'kenzap-plugin' ) }
                                placeholder={ __( 'http://www.example.com' ) }
                                value={ item.btn }
                                className="link-text"
                                onChange={ ( value ) => {
                                    this.onChangePropertyItem( 'btn', value, index, true );
                                } }
                            />
                        </div>
                        <div style={ { 'margin-bottom': '5px' } }>
                            <TextControl
                                label={ __( 'Specify link', 'kenzap-plugin' ) }
                                placeholder={ __( 'http://www.example.com' ) }
                                value={ item.link }
                                className="link-text"
                                onChange={ ( value ) => {
                                    this.onChangePropertyItem( 'link', value, index, true );
                                } }
                            />
                            <ToggleControl
                                label={ __( 'Settings' ) }
                                help={ item.linkTarget ? __( 'Open link in new window.', 'kenzap-plugin' ) : __( 'Open link in current window', 'kenzap-plugin' ) }
                                checked={ item.linkTarget }
                                onChange={ ( value ) => {
                                this.onChangePropertyItem( 'linkTarget', value, index, true );
                            } }
                            />
                        </div>
                    </div>
                    <div class="kp-pc">
                        <MediaUpload
                            onSelect={ ( media ) => {
                                this.onChangePropertyItem( 'iconMediaId', media.id, index );
                                this.onChangePropertyItem( 'img', media.sizes['kp_l']?media.sizes['kp_l']['url']:media.url, index, true );
                            } }
                            value={ item.iconMediaId }
                            render={ ( mediaUploadProps ) => (
                            <Fragment>

                                    <Button isDefault onClick={ mediaUploadProps.open } style={ { margin: '0 0 8px 0px', } }>
                                        { __( 'Upload/Choose', 'kenzap-plugin' ) }
                                    </Button>
                                    { item.img != "none" && <img class="cartIconMeasure" style={{ margin: '0 0 0px 5px', height: '27px', width: 'auto', }} src={ item.img } /> }
                                
                            </Fragment>

                            ) }
                        />
                    </div>
                </Popover>
                }
                        
            </div>
            
        ) ) } 
        
        </div> );
    }

    /**
     * Change any property of item
     * @param {string} property - editable field
     * @param {string} value - for field
     * @param {number} index - of items array
     * @param {boolean} withMutation - in some cases we should avoid mutation for force rerender component
     */
    onChangePropertyItem = ( property, value, index, withMutation = false ) => {
        const items = withMutation ? [ ...this.props.attributes.items ] : this.props.attributes.items;
        if ( ! items[ index ] ) return;
        items[ index ][ property ] = value;
        this.props.setAttributes( { items: items } );
    };

    /**
     * Change any property of item
     * @param {string} el - key of items attributes array
     * @param {string} value -  value of editable field
     */
    updateItems = ( el, value ) => {

        const items = [ ...this.props.attributes.items ];
        const di = [ ...JSON.parse( defaultItems ) ];

        //add elements to item array
        if(value > items.length){

            this.props.setAttributes( {
                items: [ ...this.props.attributes.items, {
                    ...di[0],
                    key: 'new ' + new Date().getTime(),
                } ],
            } );
        }

        //remove elements from item array
        if(value < items.length){
    
            if ( items.length === 1 ) {
                this.props.setAttributes( { items: [ di[0] ] } );
            } else {
                items.splice( items.length-1, 1 );
                this.props.setAttributes( { items: items } );
            }
        }

        this.props.setAttributes( { "elements": value } );
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
                        title={ __( 'General', 'kenzap-cta' ) }
                        initialOpen={ false }
                    >

                        <RangeControl
                            label={ __( 'Elements', 'kenzap-plugin' ) }
                            value={ attributes.items.length }
                            onChange={ ( elements ) => { this.updateItems( "", elements ); } }
                            min={ 1 }
                            max={ 25 }
                        />

                        <RadioControl
                            label={ __( 'Tab style', 'kenzap-cta' ) }
                            selected={ attributes.tabStyle }
                            options={ [
                                { label: __( 'Classic', 'kenzap-cta' ), value: 'classic' },
                                { label: __( 'Vertical', 'kenzap-cta' ), value: 'vertical' },
                                { label: __( 'Button', 'kenzap-cta' ), value: 'button' },      
                            ] }
                            onChange={ ( tabStyle ) => { setAttributes( { tabStyle } ) } }
                        />

                        <PanelColorSettings
                            title={ __( 'Highlight colot', 'kenzap-cta' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    value: attributes.highlight,
                                    onChange: ( value ) => {
                                        return setAttributes( { highlight: value } );
                                    },
                                    label: __( 'Highlight 1', 'kenzap-cta' ),
                                }
                            ] }
                        />

                    </PanelBody>

                    <PanelBody
                        title={ __( 'Tabs', 'kenzap-cta' ) }
                        initialOpen={ false }
                    >
                        { attributes.items && attributes.items.map( ( item, index ) => (

                        <PanelBody
                            title={ (index+1 ) + ". " +  __( 'Tab', 'kenzap-cta' ) }
                            initialOpen={ false }
                            >

                            <TextControl
                                label={ __( 'Tab text', 'kenzap-cta' ) + " " + (index+1) }
                                value={ item.tab }
                                onChange={ ( value ) => { this.onChangePropertyItem( 'tab', value, index, true ); } }
                            />

                            <RadioControl
                                label={ __( 'Orientation', 'kenzap-cta' ) }
                                selected={ item.layout }
                                options={ [
                                    { label: __( 'Left', 'kenzap-cta' ), value: 'left' },
                                    { label: __( 'Right', 'kenzap-cta' ), value: 'right' },
                                ] }
                                onChange={ ( value ) => { this.onChangePropertyItem( 'layout', value, index, true ); } }
                            />

                        </PanelBody>

                        ) ) }
                    </PanelBody>
                                   
                    <TypographyContainer
                        setAttributes={ setAttributes }
                        typographyArr={ typographyArr }
                        typography={ attributes.typography }
                        { ...attributes }
                    />

                    <InspectorContainer
                        setAttributes={ setAttributes }
                        { ...attributes }
                        withNested
                        withPadding
                        withWidth100
                        withBackground
                        withAutoPadding
                    />
                </InspectorControls>
   
                <div className={ className ? className : '' } style={ vars } >
                    <ContainerEdit
                        className={ `kp-tabs-1 ${ attributes.tabStyle == "vertical" ? "kpv":"" }` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >
                        <div class="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div class={ `kp-nav ${ attributes.tabStyle == "button" ? "kp-button":"" }` }>
                                <div class="kp-nav-inner" >
                                    <ul class="nav-tabs">
                                    
                                        { attributes.items && attributes.items.map( ( item, index ) => (
                                        <li onClick={ ( e ) => onTabClick(e, index) } className={ `${ index == 0 ? 'kptab active':'kptab' }` } style={ {...getTypography( attributes, 0, 'color' ), ...getTypography( attributes, 0, '--hcl' ), ...getTypography( attributes, 0, '--hbacl' ), ...{'--hbrcl': attributes.highlight} } }>
                                            <a href={ `#content-${ index }` } style={ getTypography( attributes, 0 ) }>{ item.tab }</a>
                                        </li> 
                                        ) ) }

                                    </ul>
                                </div>
                            </div>
                            { this.getTabContent(attributes, 0) }
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
