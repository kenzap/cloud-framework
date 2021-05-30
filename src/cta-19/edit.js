const { __ } = wp.i18n; 
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, InnerBlocks, MediaUpload } = wp.editor;
const { RangeControl, CheckboxControl, PanelBody, DateTimePicker, Button } = wp.components;
import { getStyles, typographyArr } from './block';
import { InspectorContainer, ContainerEdit, uo } from '../commonComponents/container/container';
import { TypographyContainer, getTypography } from '../commonComponents/typography/typography';
import { linkPicker } from '../commonComponents/link/link';
const { __experimentalGetSettings } = wp.date;

/**
 * The edit function describes the structure of your block in the context of the editor.
 * This represents what the editor will render when the block is used.
 *
 * The "edit" property must be a valid function.
 * @param {Object} props - attributes
 * @returns {Node} rendered component
 */
export default class Edit extends Component {

    constructor(props){
        super(props);
        this.state = { popupVisibleIndex: -1 };
        this.handlePicker = this.handlePicker.bind(this);
    }

    handlePicker(){this.setState({ popupVisibleIndex: 0, });}

    render() {
        const {
            className,
            attributes,
            setAttributes,
            isSelected,
        } = this.props;

        const { showPicker } = this.state;

        const settings = __experimentalGetSettings();

        // To know if the current timezone is a 12 hour time with look for an "a" in the time format.
        // We also make sure this a is not escaped by a "/".
        const is12HourTime = /a(?!\\)/i.test(
            settings.formats.time
                .toLowerCase() // Test only the lower case a
                .replace( /\\\\/g, '' ) // Replace "//" with empty strings
                .split( '' ).reverse().join( '' ) // Reverse the string and test for "a" not followed by a slash
        );

        const _twoDigits = function(str){str+="";if(str.length==1){ return "0"+str; }else{ return str; } }

        //generate date now + 3 month
        var d = new Date();
        var d2 = new Date();
        d2.setMonth(d2.getMonth() + 3);
        var de = d2.getFullYear()+"-"+_twoDigits(d2.getMonth()+1)+"-"+_twoDigits(d2.getDate())+"T23:59:59";//+_twoDigits(d2.getHours())+":"+_twoDigits(d2.getMinutes())+":"+_twoDigits(d2.getSeconds());

        if ( attributes.end_date == '' ) attributes.end_date = de;

        const { vars, kenzapContanerStyles } = getStyles( attributes );
 
        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-cta' ) }
                        initialOpen={ false }
                        >
                            
                        <CheckboxControl
                            label={ __( 'Enable countdown', 'kenzap-cta' ) }
                            checked={ attributes.countdown }
                            onChange={ ( countdown ) => setAttributes( { countdown } ) }
                            help={ __( 'To preview countdown in editor. Update and refresh this page.', 'kenzap-cta' ) }
                        />

                        { attributes.countdown && <PanelBody
                            title={ __( 'Countdown', 'kenzap-cta' ) }
                            initialOpen={ true }
                            help={ __( 'Specify starting countdown time.', 'kenzap-cta' ) }
                        >

                            <DateTimePicker
                                currentDate={ attributes.end_date }
                                onChange={ ( end_date ) => setAttributes( { end_date: end_date } ) }
                                is12Hour={ is12HourTime }
                            />

                            <CheckboxControl
                                heading={ __( 'Show in countdown', 'kenzap-cta' ) }
                                label={ __( 'Year', 'kenzap-cta' ) }
                                checked={ attributes.cbYear }
                                onChange={ ( cbYear ) => setAttributes( { cbYear } ) }
                            />

                            <CheckboxControl
                                label={ __( 'Month', 'kenzap-cta' ) }
                                checked={ attributes.cbMonth }
                                onChange={ ( cbMonth ) => setAttributes( { cbMonth } ) }
                            />

                            <CheckboxControl
                                label={ __( 'Day', 'kenzap-cta' ) }
                                checked={ attributes.cbDay }
                                onChange={ ( cbDay ) => setAttributes( { cbDay } ) }
                            />

                            <CheckboxControl
                                label={ __( 'Hour', 'kenzap-cta' ) }
                                checked={ attributes.cbHour }
                                onChange={ ( cbHour ) => setAttributes( { cbHour } ) }
                            />

                            <CheckboxControl
                                label={ __( 'Minute', 'kenzap-cta' ) }
                                checked={ attributes.cbMinute }
                                onChange={ ( cbMinute ) => setAttributes( { cbMinute } ) }
                            />

                            <CheckboxControl
                                label={ __( 'Second', 'kenzap-cta' ) }
                                checked={ attributes.cbSecond }
                                onChange={ ( cbSecond ) => setAttributes( { cbSecond } ) }
                            />

                        </PanelBody> }

                        <RangeControl
                            label={ __( 'Border radius', 'kenzap-cta' ) }
                            value={ attributes.borderRadius }
                            onChange={ ( borderRadius ) => setAttributes( { borderRadius } ) }
                            min={ 0 }
                            max={ 60 }
                        /> 

                        <RangeControl
                            label={ __( 'Gradient opacity', 'kenzap-cta' ) }
                            value={ attributes.opacity }
                            onChange={ ( opacity ) => setAttributes( { opacity } ) }
                            min={ 1 }
                            max={ 100 }
                        />

                        <RangeControl
                            label={ __( 'Gradient angle', 'kenzap-cta' ) }
                            value={ attributes.angle }
                            onChange={ ( angle ) => setAttributes( { angle } ) }
                            min={ 0 }
                            max={ 360 }
                        />

                        <p style={ { marginBottom: '5px' } }>{ __( 'Icon', 'kenzap-cta' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                setAttributes( { "img1":(media.url), "alt1":media.alt } )
                            } }
                            value={ attributes.img1 }
                            allowedTypes={ [ 'image' ] }
                            render={ ( mediaUploadProps ) => (

                            <Fragment>
                                { ( attributes.img1 !== 'none' ) ? (
                                    <Fragment>
                                        <Button
                                            isDefault
                                            onClick={ () => { 
                                                setAttributes( { "img1":'none' } )
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
                                                backgroundImage: `url(${ [ attributes.img1 ? (attributes.img1) : '' ] })`,
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

                        <RangeControl
                            label={ __( 'Icon size', 'kenzap-cta' ) }
                            value={ attributes.img1Size }
                            onChange={ ( img1Size ) => setAttributes( { img1Size } ) }
                            min={ 0 }
                            max={ 200 }
                        />

                    </PanelBody>

                    <PanelColorSettings
                        title={ __( 'Colors', 'kenzap-cta' ) }
                        initialOpen={ false }
                        colorSettings={ [
                            {
                                value: attributes.textColor,
                                onChange: ( value ) => {
                                    return setAttributes( { textColor: value } );
                                },
                                label: __( 'Countdown', 'kenzap-cta' ),
                            },
                            {
                                value: attributes.textColor3,
                                onChange: ( value ) => {
                                    return setAttributes( { textColor3: value } );
                                },
                                label: __( 'Gradient start', 'kenzap-cta' ),
                            },
                            {
                                value: attributes.textColor4,
                                onChange: ( value ) => {
                                    return setAttributes( { textColor4: value } );
                                },
                                label: __( 'Gradient end', 'kenzap-cta' ),
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
                    
                <div id={ attributes.anchor } className={ className ? className : '' } style={ vars } >
                    <ContainerEdit
                        className={ `kp-bn2 block-${ attributes.blockUniqId } ${ attributes.btnStyle } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >

                        <div class="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div class="kp-content">

                                <RichText
                                    tagName="p"
                                    className="caption"
                                    value={ attributes.caption }
                                    placeholder={ __( 'Caption', 'kenzap-cta' ) }
                                    onChange={ ( caption ) => {
                                        setAttributes( { caption: caption } )
                                    } }
                                    style={ getTypography( attributes, 0 ) }
                                    />

                                <RichText
                                    tagName="h1"
                                    className="title"
                                    value={ attributes.title }
                                    placeholder={ __( 'Title', 'kenzap-cta' ) }
                                    onChange={ ( title ) => {
                                        setAttributes( { title: title } )
                                    } }
                                    style={ getTypography( attributes, 1 ) }
                                    />

                                { attributes.countdown && <ul class="count-down" data-yeart={ __( 'Years' ) } data-montht={ __( 'Months' ) } data-dayt={ __( 'Days' ) } data-hourt={ __( 'Hours' ) } data-minutet={ __( 'Minutes' ) } data-secondt={ __( 'Seconds' ) } data-time={ attributes.end_date } data-year={ attributes.cbYear } data-month={ attributes.cbMonth } data-day={ attributes.cbDay } data-hour={ attributes.cbHour } data-minute={ attributes.cbMinute } data-second={ attributes.cbSecond }></ul> }
                                <div class="location">
                                    <p>
                                        <span class="kpim" style={ getTypography( attributes, 2, "--cl" ) }></span>
                                        <RichText
                                            tagName="span"
                                            className="kp-loc"
                                            value={ attributes.location }
                                            placeholder={ __( 'Location', 'kenzap-cta' ) }
                                            onChange={ ( location ) => {
                                                setAttributes( { location: location } )
                                            } }
                                            style={ getTypography( attributes, 2 ) }
                                            />
                                    </p>
                                </div>
                                <a
                                    style={ getTypography( attributes, 3 ) }
                                    className="action" 
                                    onClick={ this.handlePicker }
                                    >
                                    { attributes.btnText ? attributes.btnText:"Button Text" }
                                    { this.state.popupVisibleIndex === 0 && linkPicker( this, 0 ) }
                                </a>
                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
