document.addEventListener('DOMContentLoaded', function() {
    // Constants
    const yearZeroWhitepaper = 2008;
    const yearZeroGenesis = 2009;
    
    // DOM elements
    const yearInput = document.getElementById('year-input');
    const convertBtn = document.getElementById('convert-btn');
    const resultBox = document.getElementById('result-box');
    const resultNumber = document.getElementById('result');
    const resultLabel = document.querySelector('.result-label');
    const genesisToggle = document.getElementById('genesis-toggle');
    const copyBtn = document.getElementById('copy-btn');
    const examplesGrid = document.getElementById('examples-grid');
    const donateBtn = document.getElementById('donate-btn');
    
    // Initialize examples
    updateExamples();
    
    // Event listeners
    convertBtn.addEventListener('click', handleConvert);
    
    yearInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleConvert();
        }
    });
    
    yearInput.addEventListener('input', function(e) {
        // Allow only numbers and remove any non-numeric characters except minus at start
        let value = e.target.value;
        
        // Remove any characters that aren't digits or minus
        value = value.replace(/[^0-9-]/g, '');
        
        // Ensure minus is only at the beginning if present
        if (value.includes('-')) {
            const minusIndex = value.indexOf('-');
            if (minusIndex > 0) {
                value = value.replace(/-/g, '');
            } else {
                // Keep only the first minus at the beginning
                value = '-' + value.substring(1).replace(/-/g, '');
            }
        }
        
        e.target.value = value;
        updateConvertButton();
    });
    
    genesisToggle.addEventListener('change', function() {
        updateExamples();
        // Re-convert if there's already a result showing
        if (!resultBox.classList.contains('hidden') && resultBox.classList.contains('show')) {
            handleConvert();
        }
    });
    
    copyBtn.addEventListener('click', handleCopy);
    
   
   donateBtn.addEventListener('click', function (e) {
  e.preventDefault();                 // keep if <a> has an href you don’t want to follow
  window.location.href = 'https://btcpay.btc.aw/api/v1/invoices?storeId=EhvLpeoGjxPkshjeyVPbzjoJfQd9F1LiuCKEfXuefpkX&checkoutDesc=Support&browserRedirect=https://maxikenji.github.io/bitcoin-calendar/&currency=EUR&defaultPaymentMethod=BTC_LNURLPAY';
});
    
    function handleConvert() {
        const inputValue = yearInput.value.trim();
        const inputYear = parseInt(inputValue);
        
        // Validation
        if (!inputValue || inputValue === '' || inputValue === '-') {
            alert('Please enter a valid year number.');
            yearInput.focus();
            return;
        }
        
        if (isNaN(inputYear)) {
            alert('Please enter a valid year number.');
            yearInput.focus();
            return;
        }
        
        if (inputYear < 0) {
            alert('Please enter a positive year number.');
            yearInput.focus();
            return;
        }
        
        // Determine current year zero based on toggle
        const currentYearZero = genesisToggle.checked ? yearZeroGenesis : yearZeroWhitepaper;
        const diff = inputYear - currentYearZero;
        
        let resultText, labelText;
        
        if (diff === 0) {
            resultText = 'Year 0 AB';
            labelText = 'Bitcoin Invention';
        } else if (diff > 0) {
            resultText = `${diff} AB`;
            labelText = 'After Bitcoin';
        } else {
            resultText = `${Math.abs(diff)} BB`;
            labelText = 'Before Bitcoin';
        }
        
        // Update result display
        resultNumber.textContent = resultText;
        resultLabel.textContent = labelText;
        
        // Show result with animation
        showResult();
    }
    
    function showResult() {
        // Remove hidden class first
        resultBox.classList.remove('hidden');
        
        // Reset animation classes
        resultBox.classList.remove('show');
        
        // Force reflow to ensure the element is rendered
        resultBox.offsetHeight;
        
        // Add show class for animation after a small delay
        requestAnimationFrame(() => {
            resultBox.classList.add('show');
        });
    }
    
    function handleCopy() {
        const textToCopy = `${resultNumber.textContent} (${resultLabel.textContent})`;
        
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                showCopyFeedback();
            }).catch(() => {
                fallbackCopy(textToCopy);
            });
        } else {
            fallbackCopy(textToCopy);
        }
    }
    
    function fallbackCopy(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                showCopyFeedback();
            } else {
                alert('Unable to copy to clipboard. Please select and copy the result manually.');
            }
        } catch (err) {
            alert('Unable to copy to clipboard. Please select and copy the result manually.');
        }
        
        document.body.removeChild(textArea);
    }
    
    function showCopyFeedback() {
        const originalIcon = copyBtn.innerHTML;
        const originalColor = copyBtn.style.color;
        
        copyBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        `;
        copyBtn.style.color = '#4ade80';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalIcon;
            copyBtn.style.color = originalColor;
        }, 2000);
    }
    
    function updateExamples() {
        const currentYearZero = genesisToggle.checked ? yearZeroGenesis : yearZeroWhitepaper;
        const currentYear = new Date().getFullYear();
        
        const examples = [
            { year: 1971, label: 'Nixon Shock' },
            { year: currentYearZero, label: genesisToggle.checked ? 'Genesis Block' : 'Whitepaper' },
            { year: currentYear, label: 'Current Year' },
            { year: 2140, label: 'Last Bitcoin' },
        ];
        
        examplesGrid.innerHTML = '';
        
        examples.forEach(example => {
            const diff = example.year - currentYearZero;
            let convertedValue;
            
            if (diff === 0) {
                convertedValue = 'Year 0 AB';
            } else if (diff > 0) {
                convertedValue = `${diff} AB`;
            } else {
                convertedValue = `${Math.abs(diff)} BB`;
            }
            
            const exampleItem = document.createElement('div');
            exampleItem.className = 'example-item';
            
            if (diff === 0) {
                exampleItem.classList.add('highlight');
            }
            
            exampleItem.innerHTML = `
                <span class="example-year">${example.year} (${example.label})</span>
                <span class="example-result">${convertedValue}</span>
            `;
            
            examplesGrid.appendChild(exampleItem);
        });
    }
    
    // Handle input changes to enable/disable convert button
    function updateConvertButton() {
        const inputValue = yearInput.value.trim();
        const inputYear = parseInt(inputValue);
        const hasValidInput = inputValue && !isNaN(inputYear) && inputYear >= 0;
        convertBtn.disabled = !hasValidInput;
    }
    
    // Initialize convert button state
    updateConvertButton();
    
    // Auto-focus input on page load
    setTimeout(() => {
        yearInput.focus();
    }, 100);
});