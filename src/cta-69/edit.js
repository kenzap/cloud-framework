const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } = wp.editor;
const { RangeControl, ToggleControl, PanelBody, Button, TextControl, SelectControl } = wp.components;
import { getStyles, defaultSocIcons, typographyArr } from './block';
import { InspectorContainer, ContainerEdit, uo } from '../commonComponents/container/container';
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

    /*
    * Change any property of item
    * @param {string} property - editable field
    * @param {string} value - for field
    * @param {number} index - of items array
    * @param {boolean} withMutation - in some cases we should avoid mutation for force rerender component
    */
    onChangePropertyItem = ( property, value, index, withMutation = false ) => {
        const items = withMutation ? [ ...this.props.attributes.items ] : this.props.attributes.items;
        items[ index ][ property ] = value+"";
        this.props.setAttributes( { items: items } );
        this.props.setAttributes( { randomValue: new Date().getTime()+"" } );
    };

    /**
     * Change any property of item
     * @param {string} el - key of items attributes array
     * @param {string} value -  value of editable field
     */
    updateItems = ( el, value ) => {

        const items = [ ...this.props.attributes.items ];
        let itemsT = items; 
        let itemsD = JSON.parse( defaultSocIcons );

        //add elements to item array
        if(value > items.length){

            var i = items.length;
            while(value>i){

                itemsT = [ ...itemsT, {
                    ...itemsD[Math.floor(Math.random() * Math.floor(itemsD.length))],
                    key: 'new ' + new Date().getTime(),
                } ];

                i++;
            }
            this.props.setAttributes( { items: itemsT } );
        }

        //remove elements from item array
        if(value < items.length){
    
            if ( items.length === 1 ) {
                this.props.setAttributes( { items: itemsD[Math.floor(Math.random() * Math.floor(itemsD.length))] } );
            } else {
                var titems = items.slice( 0, value );
                this.props.setAttributes( { items: titems } );
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
                        title={ __( 'General', 'kenzap-plugin' ) }
                        initialOpen={ false }
                        >

                        {/* NO REMOvE
                            <ToggleControl
                            label = { __( 'Custom icon color', 'kenzap-plugin' ) } 
                            checked={ attributes.customIconColor }
                            onChange={ ( customIconColor ) => {  setAttributes( { customIconColor: customIconColor } );  } }
                            help={ __( 'Apply custom color to icons. Works with SVG only.', 'kenzap-plugin' ) }
                        /> */}

                        <SelectControl
                            label={ __( 'Left pane', 'kenzap-plugin' ) }
                            value={ attributes.leftPane }
                            options={ [
                                    { label: __( 'Hidden', 'kenzap-plugin' ), value: '' },
                                    { label: __( 'Contacts', 'kenzap-plugin' ), value: 'contacts' },
                                    { label: __( 'Logo', 'kenzap-plugin' ), value: 'logo' },
                                    //{ label: __( 'Social icons', 'kenzap-plugin' ), value: 'icons' },
                                ] }
                            onChange={ ( value ) => { setAttributes( { leftPane: value } ); } }
                            />

                        <SelectControl
                            label={ __( 'Right pane', 'kenzap-plugin' ) }
                            value={ attributes.rightPane }
                            options={ [
                                    { label: __( 'Hidden', 'kenzap-plugin' ), value: '' },
                                    { label: __( 'Links', 'kenzap-plugin' ), value: 'links' },
                                    { label: __( 'Social icons', 'kenzap-plugin' ), value: 'icons' },
                                    { label: __( 'Search', 'kenzap-plugin' ), value: 'search' },
                                    { label: __( 'Note', 'kenzap-plugin' ), value: 'note' },
                                ] }
                            onChange={ ( value ) => { setAttributes( { rightPane: value } ); } }
                            />

                        <SelectControl
                            label={ __( 'Responsive', 'kenzap-plugin' ) }
                            value={ attributes.paneVisible }
                            options={ [
                                    { label: __( 'Hide right pane', 'kenzap-plugin' ), value: 'kprp' },
                                    { label: __( 'Hide left pane', 'kenzap-plugin' ), value: 'kplp' },
                                    { label: __( 'Keep both panes', 'kenzap-plugin' ), value: 'kpbp' },
                                ] }
                            onChange={ ( value ) => { setAttributes( { paneVisible: value } ); } }
                            help={ __( 'Pane behaviour when screen is less than 600px.', 'kenzap-plugin' ) }
                            />

                    </PanelBody>

                    { attributes.leftPane == 'logo' && 
                        <PanelBody
                            title={ __( 'Logo', 'kenzap-plugin' ) }
                            initialOpen={ true }
                        >

                        <p style={ { marginBottom: '5px' } }>{ __( 'Logo', 'kenzap-plugin' ) }</p>

                        <MediaUpload
                            onSelect={ ( media ) => {
                                setAttributes( { "logo":media.url, "alt1":media.alt } )
                            } }
                            value={ attributes.logo }
                            allowedTypes={ [ 'image' ] }
                            render={ ( mediaUploadProps ) => (

                            <Fragment>
                                { ( attributes.logo !== 'none' ) ? (
                                    <Fragment>
                                        <Button
                                            isDefault
                                            onClick={ () => { 
                                                setAttributes( { "logo":'none' } )
                                            } }
                                        >
                                        { __( 'Remove', 'kenzap-plugin' ) }
                                        </Button>
                                        <img style={{ margin: '0 0 0px 5px', height: '27px', width: 'auto', }} src={ attributes.logo } />
                                        {/* <div
                                            style={ {
                                                width: '27px',
                                                height: '27px',
                                                display: 'inline-block',
                                                margin: '0 0 8px 5px',
                                                backgroundImage: `url(${ [ attributes.logo ? (attributes.logo) : '' ] })`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover',
                                            } }
                                        /> */}

                                    </Fragment>
                                ) : (
                                    <Button isDefault onClick={ mediaUploadProps.open } style={ { margin: '0 0 8px 0px', } }>
                                        { __( 'Upload/Choose', 'kenzap-plugin' ) }
                                    </Button>
                                ) }
                            </Fragment>

                            ) }
                        />
                        <p style={ { marginBottom: '5px' } }></p>

                        { attributes.logo != 'none' && <RangeControl
                            label={ __( 'Logo size', 'kenzap-plugin' ) }
                            value={ attributes.logoSize }
                            onChange={ ( logoSize ) => setAttributes( { logoSize } ) }
                            min={ 10 }
                            max={ 200 }
                        /> }

                        { attributes.logo != 'none' && <RangeControl
                            label={ __( 'Logo size mobile', 'kenzap-plugin' ) }
                            value={ attributes.logoSizem }
                            onChange={ ( logoSizem ) => setAttributes( { logoSizem } ) }
                            min={ 10 }
                            max={ 200 }
                        /> }

                        <TextControl
                            label={ __( 'Logo link', 'kenzap-plugin' ) }
                            value={ attributes.logoLink }
                            onChange={ ( logoLink ) => {  setAttributes( { logoLink } ); } }
                        />

                        </PanelBody>
                    }

                    { attributes.leftPane == 'contacts' && 
                        <PanelBody
                        title={ __( 'Contacts', 'kenzap-plugin' ) }
                        initialOpen={ true }
                        >

                        <RangeControl
                            label={ __( 'Icon size', 'kenzap-cta' ) }
                            value={ attributes.iconlSize }
                            onChange={ ( iconlSize ) => setAttributes( { iconlSize } ) }
                            min={ 1 }
                            max={ 100 }
                        />

                        <p style={ { marginBottom: '5px' } }>{ __( '1. Icon', 'kenzap-plugin' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                setAttributes( { "linkl1icon":media.url, "alt1":media.alt } )
                            } }
                            value={ attributes.linkl1icon }
                            allowedTypes={ [ 'image' ] }
                            render={ ( mediaUploadProps ) => (

                            <Fragment>
                                { ( attributes.linkl1icon !== 'none' ) ? (
                                    <Fragment>
                                        <Button
                                            isDefault
                                            onClick={ () => { 
                                                setAttributes( { "linkl1icon":'none' } )
                                            } }
                                        >
                                        { __( 'Remove', 'kenzap-plugin' ) }
                                        </Button>
                                        <div
                                            style={ {
                                                width: '27px',
                                                height: '27px',
                                                display: 'inline-block',
                                                margin: '0 0 8px 5px',
                                                backgroundImage: `url(${ [ attributes.linkl1icon ? (attributes.linkl1icon) : '' ] })`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover',
                                            } }
                                        />

                                    </Fragment>
                                ) : (
                                    <Button isDefault onClick={ mediaUploadProps.open } style={ { margin: '0 0 8px 0px', } }>
                                        { __( 'Upload/Choose', 'kenzap-plugin' ) }
                                    </Button>
                                ) }
                            </Fragment>

                            ) }
                        />

                        <TextControl
                            label={ __( '1. Link', 'kenzap-plugin' ) }
                            value={ attributes.linkl1 }
                            onChange={ ( linkl1 ) => {  setAttributes( { linkl1 } ); } }
                        />

                        <TextControl
                            label={ __( '1. Link to display', 'kenzap-plugin' ) }
                            value={ attributes.linkl1Txt }
                            onChange={ ( linkl1Txt ) => { setAttributes( { linkl1Txt } ); } }
                        />

                        <p style={ { marginBottom: '5px' } }>{ __( '2. Icon', 'kenzap-plugin' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                setAttributes( { "linkl2icon":media.url, "alt1":media.alt } )
                            } }
                            value={ attributes.linkl2icon }
                            allowedTypes={ [ 'image' ] }
                            render={ ( mediaUploadProps ) => (

                            <Fragment>
                                { ( attributes.linkl2icon !== 'none' ) ? (
                                    <Fragment>
                                        <Button
                                            isDefault
                                            onClick={ () => { 
                                                setAttributes( { "linkl2icon":'none' } )
                                            } }
                                        >
                                        { __( 'Remove', 'kenzap-plugin' ) }
                                        </Button>
                                        <div
                                            style={ {
                                                width: '27px',
                                                height: '27px',
                                                display: 'inline-block',
                                                margin: '0 0 8px 5px',
                                                backgroundImage: `url(${ [ attributes.linkl2icon ? (attributes.linkl2icon) : '' ] })`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover',
                                            } }
                                        />

                                    </Fragment>
                                ) : (
                                    <Button isDefault onClick={ mediaUploadProps.open } style={ { margin: '0 0 8px 0px', } }>
                                        { __( 'Upload/Choose', 'kenzap-plugin' ) }
                                    </Button>
                                ) }
                            </Fragment>

                            ) }
                        />

                        <TextControl
                            label={ __( '2. Link', 'kenzap-plugin' ) }
                            value={ attributes.linkl2 }
                            onChange={ ( linkl2 ) => { setAttributes( { linkl2 } );  } }
                        />

                        <TextControl
                            label={ __( '2. Link to display', 'kenzap-plugin' ) }
                            value={ attributes.linkl2Txt }
                            onChange={ ( linkl2Txt ) => { setAttributes( { linkl2Txt } ); } }
                        />

                        </PanelBody>
                    }

                    { attributes.rightPane == 'links' && 
                        <PanelBody
                            title={ __( 'Links', 'kenzap-cta' ) }
                            initialOpen={ true }
                        >

                        <RangeControl
                            label={ __( 'Number of links', 'kenzap-cta' ) }
                            value={ attributes.elements }
                            onChange={ ( elements ) => {
                                this.updateItems( 'elements', elements );
                            } }
                            min={ 1 }
                            max={ 10 }
                        />

                        <PanelColorSettings
                            title={ __( 'Link divider', 'kenzap-plugin' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    value: attributes.linkDivider,
                                    onChange: ( linkDivider ) => {
                                        return setAttributes( { linkDivider } );
                                    },
                                    label: __( 'Color', 'kenzap-plugin' ),
                                },
                            ] }
                        /> 

                        { attributes.items && attributes.items.map( ( item, index ) => (

                            <PanelBody
                                title={ (index+1 ) + ". " +  __( 'Link', 'kenzap-cta' ) }
                                initialOpen={ false }
                                >

                                <TextControl
                                    label={ __( 'Text', 'kenzap-plugin' ) }
                                    value={ item.text }
                                    onChange={ ( text ) => { this.onChangePropertyItem( 'text', text, index, true ); } }
                                />

                                <TextControl
                                    label={ __( 'Link', 'kenzap-plugin' ) }
                                    value={ item.link }
                                    onChange={ ( link ) => { this.onChangePropertyItem( 'link', link, index, true ); } }
                                />

                            </PanelBody>

                        ) ) }

                        </PanelBody>
                    }

                    { attributes.rightPane == 'search' && 
                        <PanelBody
                            title={ __( 'Search', 'kenzap-plugin' ) }
                            initialOpen={ true }
                            >

                        <TextControl
                            label={__( 'Action', 'kenzap-cta' )}
                            value={ attributes.action }
                            onChange={ ( action ) => setAttributes( { action } ) }
                            help={ __( 'Define input search page after user hits enter.', 'kenzap-cta' ) }
                        />

                        <TextControl
                            label={ __( 'Text', 'kenzap-plugin' ) }
                            value={ attributes.searchText }
                            onChange={ ( searchText ) => {  setAttributes( { searchText } ); } }
                        />

                        <p style={ { marginBottom: '5px' } }>{ __( 'Icon', 'kenzap-plugin' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                setAttributes( { "searchIcon":media.url, "alt1":media.alt } )
                            } }
                            value={ attributes.searchIcon }
                            allowedTypes={ [ 'image' ] }
                            render={ ( mediaUploadProps ) => (

                            <Fragment>
                                { ( attributes.searchIcon !== 'none' ) ? (
                                    <Fragment>
                                        <Button
                                            isDefault
                                            onClick={ () => { 
                                                setAttributes( { "searchIcon":'none' } )
                                            } }
                                        >
                                        { __( 'Remove', 'kenzap-plugin' ) }
                                        </Button>
                                        <div
                                            style={ {
                                                width: '27px',
                                                height: '27px',
                                                display: 'inline-block',
                                                margin: '0 0 8px 5px',
                                                backgroundImage: `url(${ [ attributes.searchIcon ? (attributes.searchIcon) : '' ] })`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover',
                                            } }
                                        />

                                    </Fragment>
                                ) : (
                                    <Button isDefault onClick={ mediaUploadProps.open } style={ { margin: '0 0 8px 0px', } }>
                                        { __( 'Upload/Choose', 'kenzap-plugin' ) }
                                    </Button>
                                ) }
                            </Fragment>

                            ) }
                        />

                        </PanelBody>
                    }

                    { attributes.rightPane == 'icons' && 
                        <PanelBody
                            title={ __( 'Social icons', 'kenzap-cta' ) }
                            initialOpen={ true }
                        >

                        <RangeControl
                            label={ __( 'Icon size', 'kenzap-cta' ) }
                            value={ attributes.iconlSizeSoc }
                            onChange={ ( iconlSizeSoc ) => setAttributes( { iconlSizeSoc } ) }
                            min={ 1 }
                            max={ 100 }
                        />

                        <RangeControl
                            label={ __( 'Number of icons', 'kenzap-cta' ) }
                            value={ attributes.elements }
                            onChange={ ( elements ) => {
                                this.updateItems( 'elements', elements );
                            } }
                            min={ 1 }
                            max={ 10 }
                        />

                        { attributes.items && attributes.items.map( ( item, index ) => (

                            <PanelBody
                                title={ (index+1 ) + ". " +  __( 'Icon', 'kenzap-cta' ) }
                                initialOpen={ false }
                                >

                                <p style={ { marginBottom: '5px' } }>{ __( 'Icon', 'kenzap-cta' ) }</p>
                                <MediaUpload
                                    onSelect={ ( media ) => {
                                        this.onChangePropertyItem( 'img1', media.url, index, true );
                                        this.onChangePropertyItem( 'alt1', media.alt, index, true );
                                    } }
                                    value={ item.img1 }
                                    allowedTypes={ [ 'image' ] }
                                    render={ ( mediaUploadProps ) => (

                                    <Fragment>
                                        { ( item.img1 !== 'none' ) ? (
                                            <Fragment>
                                                <Button
                                                    isDefault
                                                    onClick={ () => { 
                                                        this.onChangePropertyItem( 'img1', 'none', index, true ); 
                                                    } }
                                                >
                                                { __( 'Remove', 'kenzap-cta' ) }
                                                </Button>
                                                <div
                                                    style={ {
                                                        width: '27px',
                                                        height: '27px',
                                                        display: 'inline-block',
                                                        margin: '0 0 8px 5px',
                                                        backgroundImage: `url(${ [ item.img1 ? (item.img1) : '' ] })`,
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundSize: 'cover',
                                                    } }
                                                />

                                            </Fragment>
                                        ) : (
                                            <Button isDefault onClick={ mediaUploadProps.open } style={ { margin: '0 0 8px 0px', } }>
                                                { __( 'Upload/Choose', 'kenzap-cta' ) }
                                            </Button>
                                        ) }
                                    </Fragment>

                                    ) }
                                />

                                <TextControl
                                    label={ __( 'Link', 'kenzap-plugin' ) }
                                    value={ item.link }
                                    onChange={ ( link ) => { this.onChangePropertyItem( 'link', link, index, true ); } }
                                />

                            </PanelBody>

                        ) ) }

                        </PanelBody>
                    }

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
                    />
                    </InspectorControls>
          
                <div id={ attributes.anchor } className={ className ? className : '' } style={ vars } >
                    <ContainerEdit
                        className={ `kp-tph-1 block-${ attributes.blockUniqId } ${ attributes.paneVisible } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >
 
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }

                            <div class="kp-content">

                                { attributes.leftPane == 'logo' && attributes.logo &&
                                    <div class="lpane logo">
                                        <a href={ attributes.logoLink }>
                                            { attributes.logo !== 'none' && <img style={{ width: 'auto', height: attributes.logoSize+'px', '--lgsm': attributes.logoSizem+'px' }} src={ attributes.logo } alt="logo"/> }
                                        </a>
                                    </div>
                                }

                                { attributes.leftPane == 'contacts' &&
                                    <div class="lpane link-1">
                                        <ul>
                                            <li>
                                                <a href={ attributes.linkl1 } style={ getTypography( attributes, 0 ) }>
                                                    { attributes.customIconColor && <i class="linkl1-icon"></i> }
                                                    { !attributes.customIconColor && attributes.linkl1icon !== 'none' && <img src={ (attributes.linkl1icon) } alt="image"/> }
                                                    { attributes.linkl1Txt }
                                                </a>
                                            </li>
                                            <li>
                                                <a href={ attributes.linkl2 } style={ getTypography( attributes, 0 ) }> 
                                                    { attributes.customIconColor && <i class="linkl2-icon"></i> }
                                                    { !attributes.customIconColor && attributes.linkl2icon !== 'none' && <img src={ (attributes.linkl2icon) } alt="image"/> }
                                                    { attributes.linkl2Txt }
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                }
                                
                                { attributes.rightPane == 'links' &&
                                    <div class={ `rpane link-normal ${ attributes.linkDivider?"linkd":"" }` } style={ { "--lcl":attributes.linkDivider } }>
                                        <ul>
                                            { attributes.items && attributes.items.map( ( item, index ) => ( 
                                                <li>
                                                    <a target="_blank" rel="noopener noreferrer" style={ {...getTypography( attributes, 1 ) } } href={ item.link }>{ item.text }</a>
                                                </li>
                                            ) ) }
                                        </ul>
                                    </div>
                                }

                                { attributes.rightPane == 'search' &&
                                    <div class="rpane search">
                                        <form action={ attributes.action } >
                                            <input name="q" type="text" style={ {...getTypography( attributes, 1 ), ...getTypography( attributes, 0, "--color" ) } } placeholder={ attributes.searchText } />
                                            <button type="submit">
                                                <img src={ (attributes.searchIcon) } alt="search image" />
                                            </button>
                                        </form>
                                    </div>
                                }

                                { attributes.rightPane == 'icons' &&
                                    <div class="rpane link-social">
                                        <ul>
                                            { attributes.items && attributes.items.map( ( item, index ) => ( 
                                                <li>
                                                    { item.img1 !== 'none' && <a rel="noopener noreferrer" target="_blank" style={ {...getTypography( attributes, 1 ) } } href={ item.link }><img style={ {...getTypography( attributes, 1 ), height: attributes.iconlSizeSoc + "px" } } src={ (item.img1) } /></a> }
                                                </li>
                                            ) ) }
                                        </ul>
                                    </div>
                                }

                                { attributes.rightPane == 'note' && 

                                    <RichText
                                        tagName="div"
                                        className="kpn"
                                        value={ attributes.note }
                                        placeholder={ __( 'Type note here', 'kenzap-cta' ) }
                                        onChange={ ( note ) => { setAttributes( { note } ) } }
                                        style={ getTypography( attributes, 1 ) }
                                    />
                                }
                            </div>

                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
