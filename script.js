const greet = () => {

    // modal内のヘッダー生成
    const modalHeader = document.createElement("header");
    modalHeader.innerHTML = "ヘッダー"

    // modal内の文章生成
    const p = document.createElement("p");
    p.innerHTML = "今日も頑張ろう";

    // modal本体を生成
    const modal = document.createElement("div");
    modal.classList.add("modal");
    // modalの子要素にヘッダーと文章を追加
    modal.appendChild(modalHeader);
    modal.appendChild(p);

    // modalを囲む背景を生成
    const modalWrapper = document.createElement("div");
    modalWrapper.classList.add("modalWrapper")

    // modalWrapperをクリックしたらモーダルが消える
    document.addEventListener("click", (e) => {
        console.log(e.target)
        if(e.target.className == "modalWrapper"){
            modalWrapper.remove();
        }
    })

    // modalWrapperの子要素にmodalを追加
    modalWrapper.appendChild(modal);

    // modalWrapperにスクロール固定のための透明な線を追加
    const nonScroll = document.createElement("div");
    nonScroll.classList.add("nonScroll");
    modalWrapper.appendChild(nonScroll);

    // containerの子要素にmodalWrapperを追加
    const container = document.getElementById("container");
    container.appendChild(modalWrapper);
}

