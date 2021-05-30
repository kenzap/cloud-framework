const { __ } = wp.i18n;
const { serverSideRender: ServerSideRender } = wp;
const { Component, Fragment } = wp.element;
const { InspectorControls, MediaUpload } = wp.editor;
const { RangeControl, RadioControl, PanelBody, Button, TextControl, ToggleControl } = wp.components;
import { typographyArr } from './block';
import { InspectorContainer, uo } from '../commonComponents/container/container';
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

    getTypographyVars = (attributes, i) => {

        var t = getTypography( attributes, i );
        var to = "";
        if(t) Object.keys(t).forEach(function (item, key) { to += ("--t"+i+item.replace(/[-\/\\^$*+?.()|[\]{}]/g, '')+":"+t[item]+";"); });
        return to;
    }

    /**
     * Calculate cart icon aspect ratio.
     * CSS image masks needs width and height. Auto does not work. In order not to use 2 RangeControls use this method.
     *
     * The "edit" property must be a valid function.
     * @param {Object} img - image
     */
    cartIconMeasure = ({target:img}) => {

        const cartIconRatio = img.offsetHeight/img.offsetWidth;
        const height = parseInt(this.props.attributes.cartIconSize*cartIconRatio);
        this.props.setAttributes({ cartIconSize2: height, cartIconRatio: cartIconRatio }); 
    }

    render() {
        const {
            className,
            attributes,
            setAttributes,
        } = this.props;

        setAttributes({ t0: this.getTypographyVars(attributes, 0)});
        setAttributes({ t1: this.getTypographyVars(attributes, 1)});
        setAttributes({ t2: this.getTypographyVars(attributes, 2)});

        return (
            <div>
                <InspectorControls>

                    <PanelBody
                        title={ __( 'General', 'kenzap-plugin' ) }
                        initialOpen={ false }
                        >
                        
                        <RadioControl
                            label={ __( 'Layout', 'kenzap-cta' ) }
                            selected={ attributes.layout }
                            options={ [
                                { label: __( 'Classic', 'kenzap-cta' ), value: 'norm' },
                                { label: __( 'Center', 'kenzap-cta' ), value: 'center' },
                                //{ label: __( 'Button', 'kenzap-cta' ), value: 'button' },      
                            ] }
                            onChange={ ( layout ) => { setAttributes( { layout } ) } }
                        />

                        <ToggleControl
                            label = { __( 'Sticky', 'kenzap-plugin' ) } 
                            checked={ attributes.isSticky }
                            onChange={ ( isSticky ) => {  setAttributes( { isSticky } );  } }
                            help={ __( 'Stick menu to page top on scroll. Preview on frontend only when signed out.', 'kenzap-plugin' ) }
                        />

                        <ToggleControl
                            label = { __( 'Overlay', 'kenzap-plugin' ) } 
                            checked={ attributes.isTrans }
                            onChange={ ( isTrans ) => {  setAttributes( { isTrans } );  } }
                            help={ __( 'Overlay navigation menu on top of website contents and make it transparent. Preview on frontend only when signed out.', 'kenzap-plugin' ) }
                        /> 

                        <PanelBody
                            title={ __( '- Logo', 'kenzap-plugin' ) }
                            initialOpen={ false }
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
                                            <div
                                                style={ {
                                                    width: '27px',
                                                    height: '27px',
                                                    display: 'inline-block',
                                                    margin: '0 0 8px 5px',
                                                    backgroundImage: `url(${ [ attributes.logo ? uo(attributes.logo) : '' ] })`,
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
                        </PanelBody>
          
                        <PanelBody
                            title={ __( '- Search', 'kenzap-plugin' ) }
                            initialOpen={ false }
                            >

                            <ToggleControl
                                label = { __( 'Enable search', 'kenzap-plugin' ) } 
                                checked={ attributes.isSearch }
                                onChange={ ( isSearch ) => {  setAttributes( { isSearch } );  } }
                            />    

                            { attributes.isSearch && <Fragment>
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
                                                        backgroundImage: `url(${ [ attributes.searchIcon ? uo(attributes.searchIcon) : '' ] })`,
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundSize: 'cover',
                                                    } }
                                                />

                                            </Fragment>
                                        ) : (
                                            <Button isDefault onClick={ mediaUploadProps.open } style={ { margin: '0 0 12px 0px', } }>
                                                { __( 'Upload/Choose', 'kenzap-plugin' ) }
                                            </Button>
                                        ) }

                                    </Fragment>

                                    ) }
                                />
                                <p style={ { marginBottom: '5px' } }></p>

                                <RangeControl
                                    label={ __( 'Search icon size', 'kenzap-plugin' ) }
                                    value={ attributes.searchIconSize }
                                    onChange={ ( searchIconSize ) => setAttributes( { searchIconSize } ) }
                                    min={ 10 }
                                    max={ 200 }
                                />

                                <p style={ { marginBottom: '5px' } }> </p>

                                <TextControl
                                    label={__( 'Search action', 'kenzap-plugin' )}
                                    value={ attributes.action }
                                    onChange={ ( action ) => setAttributes( { action } ) }
                                    help={ __( 'Define input search page after user hits enter.', 'kenzap-plugin' ) }
                                />

                                <TextControl
                                    label={ __( 'Search placeholder text', 'kenzap-plugin' ) }
                                    value={ attributes.searchText }
                                    onChange={ ( searchText ) => {  setAttributes( { searchText } ); } }
                                />
                            </Fragment>
                            }
                        </PanelBody>

                        <PanelBody
                            title={ __( '- Cart', 'kenzap-plugin' ) }
                            initialOpen={ false }
                            >

                            <ToggleControl
                                label = { __( 'Enable cart', 'kenzap-plugin' ) } 
                                checked={ attributes.isCart }
                                onChange={ ( isCart ) => {  setAttributes( { isCart } );  } }
                                help={ __( 'Note. WooCommerce plugin should be activated.', 'kenzap-plugin' ) }
                            />    

                            { attributes.isCart && <Fragment>

                                <p style={ { marginBottom: '5px' } }>{ __( 'Icon', 'kenzap-plugin' ) }</p>
                                <MediaUpload
                                    onSelect={ ( media ) => {
                                        setAttributes( { "cartIcon":media.url, "alt1":media.alt } )
                                    } }
                                    value={ attributes.cartIcon }
                                    allowedTypes={ [ 'image' ] }
                                    render={ ( mediaUploadProps ) => (
    
                                    <Fragment>
                                        { ( attributes.cartIcon !== 'none' ) ? (
                                            <Fragment>
                                                <Button
                                                    isDefault
                                                    onClick={ () => { 
                                                        setAttributes( { "cartIcon":'none' } )
                                                    } }
                                                >
                                                { __( 'Remove', 'kenzap-plugin' ) }
                                                </Button>
                                                <img class="cartIconMeasure" onLoad={ this.cartIconMeasure } style={{ margin: '0 0 0px 5px', height: '27px', width: 'auto', }} src={ uo(attributes.cartIcon) } />
                                            </Fragment>
                                        ) : (
                                            <Button isDefault onClick={ mediaUploadProps.open } style={ { margin: '0 0 8px 0px', } }>
                                                { __( 'Upload/Choose', 'kenzap-plugin' ) }
                                            </Button>
                                        ) }
    
                                    </Fragment>
    
                                    ) }
                                />
                                <p style={ { marginBottom: '5px' } }>&nbsp;</p>
                                
                                <RangeControl
                                    label={ __( 'Cart icon size', 'kenzap-plugin' ) }
                                    value={ attributes.cartIconSize }
                                    onChange={ ( cartIconSize ) => { 
                                        const height = parseInt(cartIconSize*attributes.cartIconRatio);
                                        setAttributes( { cartIconSize: cartIconSize, cartIconSize2: height } ); 
                                    } }
                                    min={ 10 }
                                    max={ 200 }
                                />

                                <RangeControl
                                    label={ __( 'Icon top offset', 'kenzap-plugin' ) }
                                    value={ attributes.cartIconTop }
                                    onChange={ ( cartIconTop ) => { 
                                        setAttributes( { cartIconTop: cartIconTop } ); 
                                    } }
                                    min={ 0 }
                                    max={ 30 }
                                />

                                <RangeControl
                                    label={ __( 'Icon right offset', 'kenzap-plugin' ) }
                                    value={ attributes.cartIconRight }
                                    onChange={ ( cartIconRight ) => { 
                                        setAttributes( { cartIconRight: cartIconRight } ); 
                                    } }
                                    min={ 0 }
                                    max={ 30 }
                                />

                            </Fragment>
                            }

                        </PanelBody>

                        <PanelBody
                            title={ __( '- CTA', 'kenzap-plugin' ) }
                            initialOpen={ false }
                            >

                            <ToggleControl
                                label = { __( 'Enable cta button', 'kenzap-plugin' ) } 
                                checked={ attributes.isCTA }
                                onChange={ ( isCTA ) => {  setAttributes( { isCTA } );  } }
                                //help={ __( 'Note. WooCommerce plugin should be activated.', 'kenzap-plugin' ) }
                            />    

                            { attributes.isCTA && <Fragment>

                                <TextControl
                                    label={__( 'CTA text', 'kenzap-plugin' )}
                                    value={ attributes.ctaText }
                                    onChange={ ( ctaText ) => setAttributes( { ctaText } ) }
                                    //help={ __( 'Define input search page after user hits enter.', 'kenzap-plugin' ) }
                                />

                                <TextControl
                                    label={__( 'CTA link', 'kenzap-plugin' )}
                                    value={ attributes.ctaAction }
                                    onChange={ ( ctaAction ) => setAttributes( { ctaAction } ) }
                                    //help={ __( 'Define input search page after user hits enter.', 'kenzap-plugin' ) }
                                />

                                <RangeControl
                                    label={ __( 'CTA border width', 'kenzap-plugin' ) }
                                    value={ attributes.ctaIconSize }
                                    onChange={ ( ctaIconSize ) => { 
                                        //const height = parseInt(ctaIconSize*attributes.ctaIconRatio);
                                        //setAttributes( { ctaIconSize: ctaIconSize, ctaIconSize2: height } ); 
                                        setAttributes( { ctaIconSize: ctaIconSize } ); 
                                    } }
                                    min={ 0 }
                                    max={ 10 }
                                />

                                <RangeControl
                                    label={ __( 'CTA border offset', 'kenzap-plugin' ) }
                                    value={ attributes.ctaIconTop }
                                    onChange={ ( ctaIconTop ) => { 
                                        setAttributes( { ctaIconTop: ctaIconTop } ); 
                                    } }
                                    min={ 0 }
                                    max={ 30 }
                                />

                                <RangeControl
                                    label={ __( 'CTA border radius', 'kenzap-plugin' ) }
                                    value={ attributes.ctaIconRight }
                                    onChange={ ( ctaIconRight ) => { 
                                        setAttributes( { ctaIconRight: ctaIconRight } ); 
                                    } }
                                    min={ 0 }
                                    max={ 50 }
                                />

                                <ToggleControl
                                    label = { __( 'Inverse button', 'kenzap-plugin' ) } 
                                    checked={ attributes.ctaInverse }
                                    onChange={ ( ctaInverse ) => {  setAttributes( { ctaInverse } );  } }
                                    //help={ __( 'Note. WooCommerce plugin should be activated.', 'kenzap-plugin' ) }
                                />    


                                {/* <p style={ { marginBottom: '5px' } }>{ __( 'Icon', 'kenzap-plugin' ) }</p>
                                <MediaUpload
                                    onSelect={ ( media ) => {
                                        setAttributes( { "ctaIcon":media.url, "alt1":media.alt } )
                                    } }
                                    value={ attributes.ctaIcon }
                                    allowedTypes={ [ 'image' ] }
                                    render={ ( mediaUploadProps ) => (
    
                                    <Fragment>
                                        { ( attributes.ctaIcon !== 'none' ) ? (
                                            <Fragment>
                                                <Button
                                                    isDefault
                                                    onClick={ () => { 
                                                        setAttributes( { "ctaIcon":'none' } )
                                                    } }
                                                >
                                                { __( 'Remove', 'kenzap-plugin' ) }
                                                </Button>
                                                <img class="cartIconMeasure" onLoad={ this.cartIconMeasure } style={{ margin: '0 0 0px 5px', height: '27px', width: 'auto', }} src={ uo(attributes.ctaIcon) } />
                                            </Fragment>
                                        ) : (
                                            <Button isDefault onClick={ mediaUploadProps.open } style={ { margin: '0 0 8px 0px', } }>
                                                { __( 'Upload/Choose', 'kenzap-plugin' ) }
                                            </Button>
                                        ) }
    
                                    </Fragment>
    
                                    ) }
                                />
                                <p style={ { marginBottom: '5px' } }>&nbsp;</p>
                                
                                <RangeControl
                                    label={ __( 'CTA icon size', 'kenzap-plugin' ) }
                                    value={ attributes.ctaIconSize }
                                    onChange={ ( ctaIconSize ) => { 
                                        const height = parseInt(ctaIconSize*attributes.ctaIconRatio);
                                        setAttributes( { ctaIconSize: ctaIconSize, ctaIconSize2: height } ); 
                                    } }
                                    min={ 10 }
                                    max={ 200 }
                                />

                                <RangeControl
                                    label={ __( 'Icon top offset', 'kenzap-plugin' ) }
                                    value={ attributes.ctaIconTop }
                                    onChange={ ( ctaIconTop ) => { 
                                        setAttributes( { ctaIconTop: ctaIconTop } ); 
                                    } }
                                    min={ 0 }
                                    max={ 30 }
                                />

                                <RangeControl
                                    label={ __( 'Icon right offset', 'kenzap-plugin' ) }
                                    value={ attributes.ctaIconRight }
                                    onChange={ ( ctaIconRight ) => { 
                                        setAttributes( { ctaIconRight: ctaIconRight } ); 
                                    } }
                                    min={ 0 }
                                    max={ 30 }
                                /> */}

                            </Fragment>
                            }

                        </PanelBody>

                        {/* <PanelBody
                            title={ __( '- Other', 'kenzap-plugin' ) }
                            initialOpen={ false }
                            >


                        </PanelBody> */}

                    </PanelBody>

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
          
                    <ServerSideRender
                        block="kenzap/cta-68"
                        attributes={ {
                            containerMaxWidth: attributes.containerMaxWidth,
                            containerPadding: attributes.containerPadding,
                            containerSidePadding: attributes.containerSidePadding,
                            backgroundColor: attributes.backgroundColor,
                            backgroundImage: attributes.backgroundImage,
                            backgroundStyle: attributes.backgroundStyle,
                            backgroundPosition: attributes.backgroundPosition,
                            parallax: attributes.parallax,
                            //block
                            align: attributes.align,
                            layout: attributes.layout,
                            logo: attributes.logo,
                            logoSize: attributes.logoSize,
                            logoSizem: attributes.logoSizem,
                            textColor2: attributes.textColor2,
                            textColor3: attributes.textColor3,
                            //isSticky: attributes.isSticky,
                            //isTrans: attributes.isTrans,
                            isSearch: attributes.isSearch,
                            searchIcon: attributes.searchIcon,
                            searchIconSize: attributes.searchIconSize,
                            serverSide: true,
                            //cart 
                            isCart: attributes.isCart,
                            cartIcon: attributes.cartIcon,
                            cartIconSize: attributes.cartIconSize,
                            cartIconSize2: attributes.cartIconSize2,
                            cartIconTop: attributes.cartIconTop,
                            cartIconRight: attributes.cartIconRight,
                            //cta 
                            isCTA: attributes.isCTA,
                            ctaIcon: attributes.ctaIcon,
                            ctaIconSize: attributes.ctaIconSize,
                            ctaIconSize2: attributes.ctaIconSize2,
                            ctaIconTop: attributes.ctaIconTop,
                            ctaIconRight: attributes.ctaIconRight,
                            ctaText: attributes.ctaText,
                            ctaAction: attributes.ctaAction,
                            ctaInverse: attributes.ctaInverse,
                            t0: attributes.t0,
                            t1: attributes.t1,
                            t2: attributes.t2,
                            className: this.props.className,
                        } }
                    />
            </div>
        );
    }
}
