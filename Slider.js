class SlidingCompleteExample extends React.Component {
  state = {
    slideCompletionValue: 0,
    slideCompletionCount: 0,
  };

  render() {
    return (
      <View>
        <SliderExample
          {...this.props}
          value={this.props.inital}
          onSlidingComplete={(value) => this.setState({
              slideCompletionValue: value,
              slideCompletionCount: this.state.slideCompletionCount + 1})} />
        <Text>
          Completions: {this.state.slideCompletionCount} Value: {this.state.slideCompletionValue}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  slider: {
    height: 10,
    margin: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});

exports.title = '<Slider>';
exports.displayName = 'SliderExample';
exports.description = 'Slider input for numeric values';
exports.examples = [
  {
    title: 'Default settings',
    render(): React.Element<any> {
      return <SliderExample />;
    }
  },
  {
    title: 'Initial value: 0.5',
    render(): React.Element<any> {
      return <SliderExample value={0.5} />;
    }
  },
  {
    title: 'minimumValue: -1, maximumValue: 2',
    render(): React.Element<any> {
      return (
        <SliderExample
          minimumValue={-1}
          maximumValue={2}
        />
      );
    }
  },
  {
    title: 'step: 0.25',
    render(): React.Element<any> {
      return <SliderExample step={0.25} />;
    }
  },
  {
    title: 'onSlidingComplete',
    render(): React.Element<any> {
      return (
        <SlidingCompleteExample />
      );
    }
  },
  {
    title: 'Custom min/max track tint color',
    platform: 'ios',
    render(): React.Element<any> {
      return (
        <SliderExample
          minimumTrackTintColor={'red'}
          maximumTrackTintColor={'green'}
        />
      );
    }
  },
  {
    title: 'Custom thumb image',
    platform: 'ios',
    render(): React.Element<any> {
      return <SliderExample thumbImage={require('./uie_thumb_big.png')} />;
    }
  },
  {
    title: 'Custom track image',
    platform: 'ios',
    render(): React.Element<any> {
      return <SliderExample trackImage={require('./slider.png')} />;
    }
  },
  {
    title: 'Custom min/max track image',
    platform: 'ios',
    render(): React.Element<any> {
      return (
        <SliderExample
          minimumTrackImage={require('./slider-left.png')}
          maximumTrackImage={require('./slider-right.png')}
        />
      );
    }
  },
];