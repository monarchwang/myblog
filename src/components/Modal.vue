<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper" @click="handleWrapClick">
				<div class="modal-container" ref="container">

					<div class="modal-header">
						<slot name="header">
							default header
						</slot>
					</div>

					<div class="modal-body">
						<slot name="body">
							default body
						</slot>
					</div>

					<div class="modal-footer">
						<slot name="footer">
							default footer
							<button class="modal-default-button"
									@click="close">
								OK
							</button>
						</slot>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>

	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			},
			closable: {
				type: Boolean,
				default: true
			},
			maskClosable: {
				type: Boolean,
				default: true
			},
			title: {
				type: String
			},
			width: {
				type: String,
				default: "300"
			}
		},
		data() {
			return {}
		},
		mounted(){
			// ESC close
			document.addEventListener('keydown', this.EscClose);
			this.$refs.container.style.width = this.width + "px";
		},
		beforeDestroy () {
			document.removeEventListener('keydown', this.EscClose);
		},
		methods: {
			close() {
				this.$emit('close');
			},
			EscClose (e) {
				if (this.show && this.closable) {
					if (e.keyCode === 27) {
						this.close();
					}
				}
			},
			mask () {
				if (this.maskClosable) {
					this.close();
				}
			},
			handleWrapClick (event) {
				const className = event.target.getAttribute('class');
				if (className && className.indexOf(`modal-wrapper`) > -1) this.mask();
			}
		}
	}
</script>

<style scoped lang="scss">
	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		display: table;
		transition: opacity .3s ease;
	}

	.modal-wrapper {
		display: table-cell;
		vertical-align: middle;
	}

	.modal-container {
		width: 600px;
		margin: 0 auto;
		padding: 20px 30px;
		background-color: #fff;
		border-radius: 2px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
		transition: all .3s ease;
		font-family: Helvetica, Arial, sans-serif;
		border-radius: 10px;
	}

	.modal-header h3 {
		margin-top: 0;
		color: #42b983;
	}

	.modal-body {
		margin: 20px 0;
	}

	.modal-default-button {
		float: right;
	}

	/*
	 * The following styles are auto-applied to elements with
	 * transition="modal" when their visibility is toggled
	 * by Vue.js.
	 *
	 * You can easily play with the modal transition by editing
	 * these styles.
	 */

	.modal-enter {
		opacity: 0;
	}

	.modal-leave-active {
		opacity: 0;
	}

	.modal-enter .modal-container,
	.modal-leave-active .modal-container {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}
</style>